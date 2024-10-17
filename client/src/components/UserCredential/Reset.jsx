import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPassValidation } from "../helper/Validate";
import Header from "../Header/Header";
import { resetPassword } from "../helper/helper";
import { useAuthStore } from "../../store/store";
import { useNavigate, Navigate } from "react-router-dom";
import useFetch from "../hooks/fetchHooks";

function Reset() {
  const username = useAuthStore((state) => state.auth.username);
  const navigate = useNavigate();
  
  // Correctly destructuring the response from useFetch
  const { isLoading, apiData, status, serverError } = useFetch('/createResetSession');
  console.log(apiData)
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pas: "",
    },
    validate: resetPassValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let resetPromise = resetPassword({ username, password: values.password });

      toast.promise(resetPromise, {
        loading: "Uploading...",
        success: <b>Reset Successfully...!</b>,
        error: <b>Could not Reset!</b>,
      });

      resetPromise.then(function () {
        navigate("/password");
      });
    },
  });

  if (isLoading) return <h1 className="text-success">isLoading</h1>;
  if (serverError) return <h1 className="text-danger">{serverError.message}</h1>;

  if (status && (status !== 200 || status !== 201)) return <Navigate to={"/password"} replace={true} />;

  return (
    <div className="text-white sub_page bg-dark">
      <Header />
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <h2>Reset</h2>

      <form className="" onSubmit={formik.handleSubmit}>
        <div className="mb-3 ">
          <label className="form-label mt-4 text-success">
            <h5>Enter New Password</h5>
          </label>
          <input
            type="password"
            {...formik.getFieldProps("password")}
            placeholder="New password"
            className="form-control  m-auto"
          />

          <label className="form-label mt-4 text-success">
            <h5>Confirm Password</h5>
          </label>
          <input
            type="password"
            {...formik.getFieldProps("confirm_pas")}
            placeholder="Repeat password"
            className="form-control  m-auto"
          />
        </div>

        <button type="submit" className="btn btn-outline-warning">
          Change
        </button>
      </form>
    </div>
  );
}

export default Reset;
