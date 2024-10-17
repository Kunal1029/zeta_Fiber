import axios from "axios";
import { jwtDecode } from 'jwt-decode';
// import { toast } from 'react-hot-toast';

// axios.defaults.baseURL = process.env.Server_domain;
axios.defaults.baseURL = "http://localhost:1000";
// make api request

export async function getUsername() {
  const token = localStorage.getItem('token')
  if(!token) return Promise.reject("Cannot find token")
  let decode = jwtDecode(token)
  console.log(decode," getUsername helper frnt")

  return decode;
}

// authenticate function
export async function authenticate(username) {
  try {
    const response = await axios.post("/api/authenticate", { username });

    // Log full response for debugging
    console.log("Authenticate Response:", response);

    if (response.status === 201) {
      return response.data; // Return success response
    }

    return { error: "User not found" };
  } catch (error) {
    if (error.response) {
      return {
        error: error.response.data.message || "Authentication error",
      };
    } else if (error.request) {
      return { error: "No response received from the server" };
    } else {
      return { error: "Request setup error: " + error.message };
    }
  }
}


// get user details

export async function getUser({ username }) {
  try {
    // Make a GET request to retrieve user data
    const { data } = await axios.get(`/api/user/${username}`);
    return data; // Return the user data
  } catch (error) {
    // Enhanced error handling
    if (error.response) {
      // Server responded with a status code outside the 2xx range
      return {
        error: error.response.data.message || "Unable to fetch user data.",
      };
    } else if (error.request) {
      // The request was made but no response was received
      return {
        error: "No response received from the server. Please try again.",
      };
    } else {
      // Something else happened while setting up the request
      return { error: "Error in request: " + error.message };
    }
  }
}

//  register user function

export async function registerUser(credentials) {
  try {
    // console.log("Helper register ",credentials)
    const {
      data: { msg },
      status,
    } = await axios.post("/api/register", credentials);

    const { username, email } = credentials;
    
    // send email
    if (status === 201 || status === 200) {
      await axios.post("/api/registerMail", {
        username,
        userEmail: email,
        text: msg,
      });
    }
    console.log(email , username , status)

    return Promise.resolve(msg);

    // return msg; //Can Directly return the success message
  } catch (error) {
    // Handle errors directly within this function
    let errorMessage = "An error occurred during registration.";

    if (error.response) {
      errorMessage = error.response.data?.message || errorMessage;
    } else if (error.request) {
      errorMessage = "No response received from the server. Please try again.";
    } else {
      errorMessage = `Error: ${error.message}`;
    }

    return Promise.reject({ error: errorMessage });
  }
}

// login function
export async function verifyPassword({ username, password }) {
  try {
    if (!username) {
      throw new Error("Username is required.");
    }
    const { data } = await axios.post(`/api/login`, { username, password });
    return data;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data?.message || "Password not matched"
      : "An error occurred while verifying the password.";

    return Promise.reject({ error: errorMessage });
  }
}

//update user profile function
export async function updateUser(credentials) {
  try {
    const token = await localStorage.getItem("token");
    if (!token) {
      throw new Error("Authorization token is missing.");
    }
    const { data } = await axios.put("/api/updateuser", credentials, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  } catch (error) {
    // Handle different types of errors with informative messages
    let errorMessage = "Couldn't update profile.";

    if (error.response) {
      errorMessage = error.response.data?.message || errorMessage;
    } else if (error.request) {
      errorMessage = "No response received from the server. Please try again.";
    } else {
      errorMessage = error.message; // Fallback to the error message
    }

    return { error: errorMessage };
  }
}

// generate otp
export async function generateOTP(username) {
    try {
        // Request to generate OTP
        const { data: { code }, status } = await axios.get('/api/generateOTP', { params: { username } });
        const h = await axios.get('/api/generateOTP', { params: { username } });
        console.log(h , " user hlpr genOtp")
        console.log(status, " hlpr genOtp")
        console.log(code , " hlpr genOtp")
        // Proceed if the status is successful
        if (status === 201 || status === 200) {
            // Fetch user details
            // const { data: { email } } = await getUser({ username });
            // console.log(email, " emil hlpr genOtp")
            const data = await getUser({ username });
            console.log(data.email, " data hlpr genOtp")

            // Prepare the email content
            const text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;

            // Send the OTP via email
            const send = await axios.post('/api/registerMail', { username, userEmail: data.email, text : text, subject: "Password recovery email" });
            if(!send){
              console.log(send," hlpr genotp")
            }
          }

        return code; // Return the generated OTP
    } catch (error) {
        // Enhanced error handling
        let errorMessage = "An error occurred while generating the OTP.";

        if (error.response) {
            errorMessage = error.response.data?.message || errorMessage;
        } else if (error.request) {
            errorMessage = "No response received from the server. Please try again.";
        } else {
            errorMessage = error.message; // Fallback to the error message
        }

        return { error: errorMessage }; // Return the error message
    }
}

//verify otp
export async function verifyOTP({username, code}) {
    try {
        // Send a request to verify the OTP
        const { data, status } = await axios.get('/api/verifyOTP', { params: { username, code } });

        // Return the response data along with the status
        return { data, status };
    } catch (error) {
        // Enhanced error handling
        let errorMessage = "An error occurred while verifying the OTP.";

        if (error.response) {
            errorMessage = error.response.data?.message || errorMessage;
        } else if (error.request) {
            errorMessage = "No response received from the server. Please try again.";
        } else {
            errorMessage = error.message; // Fallback to the error message
        }

        return { error: errorMessage }; // Return a structured error object
    }
}
     
// reset user password
export async function resetPassword({ username, password }) {
    try {
        // Send a request to reset the password
        const { data, status } = await axios.put('/api/resetPassword', { username, password });

        // Return the response data along with the status
        return { data, status };
    } catch (error) {
        // Enhanced error handling
        let errorMessage = "An error occurred while resetting the password.";

        if (error.response) {
            errorMessage = error.response.data?.message || errorMessage; // Extract message from response
        } else if (error.request) {
            errorMessage = "No response received from the server. Please try again."; // No response case
        } else {
            errorMessage = error.message; // Fallback to the error message
        }

        return { error: errorMessage }; // Return a structured error object
    }
}
