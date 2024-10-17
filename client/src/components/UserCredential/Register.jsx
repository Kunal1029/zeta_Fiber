import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidation } from "../helper/Validate";
import { useState } from "react";
import convertToBase64 from "../helper/convert";
import Header from "../Header/Header";
import { registerUser } from "../helper/helper.js";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: "k1@gmail.com",
      username: "examp1",
      password: "admin@123",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });

      try {
        let registerPromise = registerUser(values);
        toast.promise(registerPromise, {
          loading: "Creating...",
          success: <b>Registered Successfully, Please Login</b>,
          error: <b>Could not register..</b>,
        });

        // Navigate to the login page after successful registration
        registerPromise
          .then(() => {
            navigate("/login"); // You might have named it 'navigate' instead of 'navi'
          })
          .catch((error) => {
            console.error("Registration error: ", error);
          });

      } catch (error) {
        console.error("Registration error: ", error);
      }
    },
  });

  // formik doesn't support file upload so we need to create handler
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="text-white sub_page bg-dark">
      <Header />

      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <h1>Hello, Happy Register</h1>

      <form className="mt-5" onSubmit={formik.handleSubmit}>
        <div className="text-center mb-3">
          <label htmlFor="profile" className="mb-3">
            <img src={file || "/avt.png"} className="rounded w-25" alt="..." />
          </label>

          <input onChange={onUpload} type="file" id="profile" name="profile" />
        </div>

        <div className="mb-3">
          <input
            type="email"
            {...formik.getFieldProps("email")}
            placeholder="Email"
            className={`form-control w-50 m-auto ${
              formik.errors.email && formik.touched.email ? "is-invalid" : ""
            }`}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="invalid-feedback">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="text"
            {...formik.getFieldProps("username")}
            placeholder="Username"
            className={`form-control w-50 m-auto ${
              formik.errors.username && formik.touched.username
                ? "is-invalid"
                : ""
            }`}
          />
          {formik.errors.username && formik.touched.username && (
            <div className="invalid-feedback">{formik.errors.username}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="password"
            {...formik.getFieldProps("password")}
            placeholder="Password"
            className={`form-control w-50 m-auto ${
              formik.errors.password && formik.touched.password
                ? "is-invalid"
                : ""
            }`}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="invalid-feedback">{formik.errors.password}</div>
          )}
        </div>

        <button type="submit" className="btn btn-outline-warning">
          Sign Up
        </button>
      </form>

      <h5>
        Already Registered?{" "}
        <Link className="text-danger" to={"/login"}>
          Login
        </Link>
      </h5>
    </div>
  );
}

export default Register;
