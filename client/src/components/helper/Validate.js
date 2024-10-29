/* eslint-disable no-unused-vars */

import { toast } from "react-hot-toast";
import { authenticate } from "./helper";

// Validate login page username
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values); // Assuming this is a custom function you have defined
  if (values.username) {
    try {
      // Check if user exists or not
      const response = await authenticate(values.username);
      if (response.error) {
        errors.exist = toast.error(
          "User does not exist : Validate.js - Frntend"
        );
      } else {
        console.log("User exists:", values.username);
      }
    } catch (error) {
      errors.server = toast.error("Something went wrong with authentication");
    }
  }

  return errors;
}
// validate login page password
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}
// login validate
export async function loginValidate(values) {
    const errors = usernameVerify({},values);
    if(values.username){
        try {
            // Check if user exists or not
            const response = await authenticate(values.username);
            if (response.error) {
              errors.exist = toast.error(
                "User does not exist : Validate.js - Frntend"
              );
            } else {
              console.log("User exists:", values.username);
            }
          } catch (error) {
            errors.server = toast.error("Something went wrong with authentication");
          }
    }

    passwordVerify(errors, values);

    return errors;
}

// validate reset pass
export async function resetPassValidation(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_pas) {
    errors.exist = toast.error("Password not match...!");
  }
  return errors;
}

// validate register form
export async function registerValidation(values) {
  const errors = {};
  // console.log("registerValidation "+values.username)
  // console.log("registerValidation "+values.password)
  // console.log("registerValidation "+values.email)
  // console.log("registerValidation pro "+values.profile[10])
  // console.log("registerValidation pro "+values.profile)

  usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

// validate profile
export async function profileValidation(values) {
  const errors = {};
  emailVerify(errors, values);
  mobileVerify(errors, values);

  return errors;
}

// validate phone

function mobileVerify(errors = {}, values) {
  // Convert mobile number to a string
  const mobileStr = values.mobile?.toString();

  // // Debugging logs
  // console.log("Mobile Value:", mobileStr); // Now this should show the string version
  // console.log(typeof(mobileStr)); // This should now be a 'string'
  // console.log(mobileStr.length); // This should give the correct length of the string

  // Now validate the length of the mobile number
  if (mobileStr.length !== 10) {
    errors.mobile = `Mobile number must be exactly 10 digits, Currently Digit is ${mobileStr.length}`;
    toast.error(errors.mobile);
  } else if (!/^\d{10}$/.test(mobileStr)) {
    errors.mobile = "Mobile number should contain only digits";
    toast.error(errors.mobile);
  }

  return errors;
}

// validate password
function passwordVerify(error = {}, values) {
  const specialChars = /[!@#$%^&*()_\-+=[\]{};':"\\|,.<>\\/?~`]/;

  if (!values.password) {
    error.password = toast.error("password");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Wrong password");
  } else if (values.password.length < 4) {
    error.password = toast.error("Password len should more than 4");
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error("Password must have special chars");
  }
}

// validate username
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username or email Required");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username");
  }

  return error;
}

// validate email
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("pls enter email");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Email is wrong");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid Email Address");
  }

  return error;
}
