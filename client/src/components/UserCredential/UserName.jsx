import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/Validate";
import { useAuthStore } from "../../store/store.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    <div className="ModalCard ">
      <div className="card mb-3 m-auto formCard col-md-8" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src="./image/FL.png" className="img-fluid rounded-start w-50" alt="..." />
            <h2>Welcome Back</h2>
            <p>Please login to continue</p>
          </div>
          
          <div className="col-md-8">
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <p className="card-text">
                <div className="text-white">
                  {/* <Header /> */}
                  <Toaster position="top-center" reverseOrder={false}></Toaster>
                  <h1>Login</h1>
                  
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

                  <h5>
                    Not a Member?{" "}
                    <Link className="text-danger" to={"/register"}>
                      Register
                    </Link>
                  </h5>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserName;
