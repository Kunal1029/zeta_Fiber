import UserModel from "../model/User.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import ENV from "../config.js";
import otpGenerator from "otp-generator";

export async function verifyUser(req, res, next) {
  try {
    const { username } = req.method === "GET" ? req.params : req.body;

    if (!username) {
      console.log(req.query, " cntrol verifyUser");
      console.log(req.params, " cntrol verifyUser");
      console.log(req.body, " cntrol verifyUser");
      const { username } = req.query;

      console.log("Username received:", username);
      let user = await UserModel.findOne({ username });
      console.log("User found:", user);

      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }

      // If user exists, pass control to the next middleware
      next();
    } else {
      console.log("Username received:", username);
      let user = await UserModel.findOne({ username });
      console.log("User found:", user);

      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }

      // If user exists, pass control to the next middleware
      next();
    }
  } catch (error) {
    console.error("Error during user verification:", error);
    return res
      .status(500)
      .send({ error: "Server error during authentication" });
  }
}

export async function register(req, res) {
  //post
  try {
    const { username, password, profile, email } = req.body;

    const existUsername = await UserModel.findOne({ username });
    if (existUsername) {
      return res.status(400).send({ error: "Please use a unique username" });
    }

    const existEmail = await UserModel.findOne({ email });
    if (existEmail) {
      return res.status(400).send({ error: "Please use a unique email" });
    }

    if (password) {
      const hashPassword = await bcrypt.hash(password, 10);

      const user = new UserModel({
        username,
        password: hashPassword,
        profile: profile || "",
        email,
      });

      const result = await user.save();
      console.log(result ," result contrl regis");

      return res.status(201).send({ msg: "User Registered Successfully" });
      
    } else {
      return res.status(400).send({ msg: "Password is required" });
    }
  } catch (error) {
    return res.status(500).send({ error: "Registration failed" });
  }
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;

    const existUsername = await UserModel.findOne({ username });

    if (!existUsername) {
      return res.status(400).send({ error: "Invalid username" });
    }

    const passValid = await bcrypt.compare(password, existUsername.password);

    if (!passValid) {
      return res.status(400).send({ error: "Invalid  assword" });
    }

    const token = jwt.sign(
      {
        userId: existUsername._id,
        username: existUsername.username,
      },
      ENV.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // console.log(existUsername, " Login wala");

    return res.status(200).send({
      msg: "Login Successful...!",
      username: existUsername.username,
      token,
    });
  } catch (error) {
    return res.status(500).send({ error: "Login failed" });
  }
}

export async function getUser(req, res) {
  const { username } = req.params;

  if (!username) {
    return res.status(400).send({ error: "Invalid username" });
  }

  try {
    const user = await UserModel.findOne({ username }).lean(); // using .lean() to get plain JS object
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    // Remove password from the user object
    const { password, ...rest } = user;
    // console.log('Current resetSession value:', req.app.locals.resetSession);
    return res.status(200).send(rest);
  } catch (error) {
    return res.status(500).send({ error: "Cannot retrieve user data" });
  }
}

export async function updateUser(req, res) {
  try {
    // const id = req.query.id;
    const { userId } = req.user;
    if (userId) {
      const updated = req.body;

      // Using async/await instead of callback
      const user = await UserModel.updateOne({ _id: userId }, updated);

      if (user.modifiedCount === 0) {
        return res
          .status(404)
          .send({ msg: "User not found or no changes made" });
      }

      return res.status(200).send({ msg: "Record updated successfully" });
    } else {
      return res.status(400).send({ error: "User ID is required" });
    }
  } catch (error) {
    return res.status(500).send({ error: "Server error occurred" });
  }
}
// or

// export async function updateUser1(req, res) {
//   const { id } = req.params;  // Extracts the user ID from the URL
//   const updates = req.body;

//   try {
//     const updatedUser = await UserModel.findByIdAndUpdate(id, updates, { new: true });
//     res.status(200).send(updatedUser);
//   } catch (error) {
//     res.status(500).send({ error: 'Update failed' });
//   }
// }

export async function generateOTP(req, res) {
  try {
    const OTP = await otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    req.app.locals.OTP = OTP;

    // Make sure you're sending a proper response
    res.status(201).json({ code: OTP });
  } catch (error) {
    console.error("Error generating OTP:", error);
    res.status(500).json({ error: "Failed to generate OTP" });
  }
}


export async function verifyOTP(req, res) {
  // Get the OTP code from the query
  const { code } = req.query;
  const c = req.query;
  console.log(c , " cntrl veriftOtp")
  console.log(code , " cntrl veriftOtp")
  console.log(req.app.locals.OTP , " local otp cntrl veriftOtp")

  // Compare the provided OTP with the one stored in app.locals
  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    // OTP is correct
    req.app.locals.OTP = null; // Reset the OTP value
    req.app.locals.resetSession = true; // Start session for resetting the password
    return res.status(201).send({ msg: "OTP verified successfully" });
  }

  // OTP is invalid
  return res.status(400).send({ error: "Invalid OTP" });
}


export async function createResetSession(req, res) {
  if (req.app.locals.resetSession) {
    // req.app.locals.resetSession = false;
    return res.status(201).send({ flag: req.app.locals.resetSession });
  }
  return res.status(440).send({ error: "Session Expired!" });
}

export async function resetPassword(req, res) {
  try {
    // Check if the reset session is active
    if (!req.app.locals.resetSession) {
      return res.status(440).send({ error: "Session expired" });
    }

    const { username, password } = req.body;

    // Check if the username is provided
    if (!username || !password) {
      return res
        .status(400)
        .send({ error: "Username and password are required." });
    }

    // Find the user by username
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(404).send({ error: "Username not found" });
    }

    // Hash the new password
    const hashPassword = await bcrypt.hash(password, 10);

    // Update the user's password
    await UserModel.updateOne(
      { username: user.username },
      { password: hashPassword }
    );

    // Deactivate reset session
    req.app.locals.resetSession = false;

    return res.status(200).send({ msg: "Record Updated!" });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).send({ error: "Internal server error" });
  }
}
