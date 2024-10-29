import { styled, CloudUploadIcon, Button } from "../imports/MuiImports.js";

import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidation } from "../helper/Validate";
import { useState } from "react";
import convertToBase64 from "../helper/convert";
// import Header from "../Header/Header";
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

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div className="parent-div container-fluid bg-danger mt-5">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="child-div container">
        <br />
        <br />
        <br />

        <div className="row real-content">
          <div className="col-xl-5 section-one">
            <h2 className="section-one-element">
              <img src="./image/FL.png" alt="" className="w-25" />
            </h2>
            <h5>ZetaOne</h5>
            <h3 style={{ fontWeight: "500" }} className="nice mt-5">
              Nice to meet you
            </h3>
            <h5 className="nice">Just register to join with us</h5>
          </div>

          <div className="col-xl-7 section-two">
            {/* <!-- Subsection start --> */}
            <div className="row" style={{ padding: "0% 11% 0% 11%" }}>
              <div className="col-sm-6">
                <h2>Register</h2>
              </div>
              <div className="col-sm-6 account-already">
                <h5>
                  <i className="fa-solid fa-arrow-right"></i> Have an account?{" "}
                  <Link className="text-danger" to={"/login"}>
                    Login
                  </Link>
                </h5>
              </div>
            </div>
            {/* <!-- Subsection end --> */}

            <div className="social-icons mt-5">
              <div>
                <i className="fa-brands fa-facebook fa-xl text-primary"></i>
              </div>
              <div>
                <i className="fa-brands fa-google fa-xl text-danger"></i>
              </div>
            </div>

            <h6 className="login-or mt-4 text-dark">
              <p className="line"></p>
              Or register with email
              <p className="line"></p>
            </h6>

            <div className="container form-container">
              <form
                className="mt-4"
                style={{ padding: "0% 11% 0% 11%" }}
                onSubmit={formik.handleSubmit}
              >
                <div className="text-center mb-3">
                  <label htmlFor="profile" className="mb-3">
                    <img
                      src={file || "/avt.png"}
                      className="rounded w-25"
                      alt="..."
                    />
                  </label>

                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Profile Image
                    <VisuallyHiddenInput
                      onChange={onUpload}
                      type="file"
                      id="profile"
                      multiple
                    />
                  </Button>
                </div>

                <input
                  className="form-control mt-3"
                  placeholder="Name?"
                  type="text"
                />

                <div className="">
                  <input
                    type="email"
                    {...formik.getFieldProps("email")}
                    placeholder="Email"
                    className={`form-control mt-3 ${
                      formik.errors.email && formik.touched.email
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                <div className="">
                  <input
                    type="text"
                    {...formik.getFieldProps("username")}
                    placeholder="Username"
                    className={`form-control mt-3 ${
                      formik.errors.username && formik.touched.username
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  {formik.errors.username && formik.touched.username && (
                    <div className="invalid-feedback">
                      {formik.errors.username}
                    </div>
                  )}
                </div>

                <input
                  className="form-control mt-3"
                  placeholder="Phone?"
                  type="number"
                />

                <div className="row mt-3">
                  <div className="col-md-6">
                    <input
                      type="password"
                      {...formik.getFieldProps("password")}
                      placeholder="Password"
                      className={`form-control ${
                        formik.errors.password && formik.touched.password
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    {formik.errors.password && formik.touched.password && (
                      <div className="invalid-feedback">
                        {formik.errors.password}
                      </div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <input
                      type="password"
                      {...formik.getFieldProps("password")}
                      placeholder="Confirm Password"
                      className={`confirm form-control ${
                        formik.errors.password && formik.touched.password
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    {formik.errors.password && formik.touched.password && (
                      <div className="invalid-feedback">
                        {formik.errors.password}
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className="row mt-4 last-section"
                 
                >
                  <div className="col-md-6">
                    <div
                      className="check-box"
                      // style={{ padding: "0% 0% 0% 11%", display: "flex", gap:"-10px" }}
                    >
                      <input
                        style={{ width: "6%", height: "1.1rem" }}
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <span>Terms & Condition</span>
                    </div>
                  </div>

                  <div className="col-md-6 ">
                    <Button variant="contained" type="submit" className="">
                      SignUp
                    </Button>
                  </div>
                </div>
              </form>

              {/* <!-- mobil size --> */}
              <div className="col-sm-6 account-already-mobile">
                <h5>
                  <i className="fa-solid fa-arrow-right"></i> Already have an
                  account?{" "}
                  <Link className="text-danger" to={"/login"}>
                    Login
                  </Link>
                </h5>
              </div>
              {/* <!-- mobil size end --> */}

              {/* <h5>
                Already Registered?{" "}
                <Link className="text-danger" to={"/login"}>
                  Login
                </Link>
              </h5> */}
            </div>

            <div className="mt-5"></div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Register;
