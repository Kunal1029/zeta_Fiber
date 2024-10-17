import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/Validate";
import { useAuthStore } from "../../store/store.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function UserName() {

  const navigate = useNavigate();
  const setUsername = useAuthStore(state => state.setUsername);
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
      await new Promise(resolve => setTimeout(resolve, 500)); // simulate API delay
      setLoading(false);
      navigate('/password');
    },
  });

  return (
    <div className="text-white sub_page bg-dark">
      {/* <Header /> */}
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <h1>Hey, Welcome Back</h1>
      <div className="text-center">
        <img src="/avt.png" className="rounded w-25" alt="User Avatar" />
      </div>
      <form className="" onSubmit={formik.handleSubmit}>
        <div className="mb-3 ">
          <label className="form-label mt-4 text-success">
            <h4>UserName or Email</h4>
          </label>
          <input
            type="text"
            name="username"
            {...formik.getFieldProps("username")}
            placeholder="UserName or Email"
            className={`form-control col-12 col-md-6 m-auto ${formik.errors.username && formik.touched.username ? 'is-invalid' : ''}`}
          />
          {formik.errors.username && formik.touched.username && (
            <div className="invalid-feedback">{formik.errors.username}</div>
          )}
          <div id="emailHelp" className="form-text">
            We will never share your email with anyone else.
          </div>
        </div>

        <button type="submit" className="btn btn-outline-warning" disabled={loading}>
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
  );
}

export default UserName;
