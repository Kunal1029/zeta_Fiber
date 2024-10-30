import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/Validate";
import { useAuthStore } from "../../store/store.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { styled, CloudUploadIcon, Button } from "../imports/MuiImports.js";

function UserName() {
  const navigate = useNavigate();
  const setUsername = useAuthStore((state) => state.setUsername);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({ 
    initialValues: {
      username: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setLoading(true);
      setUsername(values.username);
      await new Promise((resolve) => setTimeout(resolve, 500)); // simulate API delay
      setLoading(false);
      navigate("/password");
    },
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
              Welcome Back
            </h3>
          </div>

          <div className="col-xl-7 section-two">
            {/* <!-- Subsection start --> */}
            <div className="row" style={{ padding: "0% 11% 0% 11%" }}>
              <div className="col-sm-6">
                <h2>Login</h2>
              </div>
              <div className="col-sm-6 account-already">
                <h5>
                  <i className="fa-solid fa-arrow-right"></i> Not Register ?{" "}
                  <Link className="text-danger" to={"/register"}>
                    Register
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
              Or login with email
              <p className="line"></p>
            </h6>

            <div className="container form-container">
              
            <form className="" onSubmit={formik.handleSubmit}>
                    <div className="mb-3 ">
                      <input
                        type="text"
                        name="username"
                        {...formik.getFieldProps("username")}
                        placeholder="Phone or Email"
                        className={`form-control  m-auto ${
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
                      <div id="emailHelp" className="form-text">
                        We will never share your email with anyone else.
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-outline-warning"
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Let's Go"}
                    </button>
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

export default UserName;
