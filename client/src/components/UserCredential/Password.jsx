import { Link } from "react-router-dom";
import { Toaster , toast} from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/Validate";
import Header from "../Header/Header";
import useFetch from "../hooks/fetchHooks.js";
import { useAuthStore } from "../../store/store.js";
import { verifyPassword } from "../helper/helper.js";
import { useNavigate } from "react-router-dom";

function Password() {
  // Access the store correctly
  const username = useAuthStore((state) => state.auth.username);
  const navigate = useNavigate();

  const { isLoading, apiData, serverError } = useFetch(`/user/${username}`);

  console.log(apiData, " Password.jsx api data"); // Check the structure of apiData

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
     try {
      let loginPromise = verifyPassword({username, password: values.password})
      toast.promise(loginPromise, {
        loading: "Cheaking...",
        success: <b>Login SuccessFully</b>,
        error: <b>Password Not match!</b>,
      });

      // Navigate to the login page after successful registration
      loginPromise
        .then((res) => {
          localStorage.setItem('token', res.token)
          navigate("/profile"); 
          // console.log(res.token," RES password.jsx")
        })
        .catch((error) => {
          console.error("Registration error: ", error);
        });

    } catch (error) {
      console.error("Registration error: ", error);
    }
    },
  });

  if (isLoading) return <h1 className="text-success">isLoading</h1>;
  if (serverError) return <h1 className="text-danger">{serverError.message}</h1>;

  return (
    <div className="text-white sub_page bg-dark">
      <Header />
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <h1>Hello {apiData?.firstName || apiData?.username || "Guest"}</h1> {/* Access username properly */}

      <div className="text-center">
        <img
          src={apiData?.profile || `./avt.png`}  // Safely access profile
          className="rounded w-25"
          alt="Profile"
        />
      </div>

      <form className="" onSubmit={formik.handleSubmit}>
        <div className="mb-3 ">
          <label className="form-label mt-4 text-success">
            <h4>Password</h4>
          </label>
          <input
            type="password"
            {...formik.getFieldProps("password")}
            placeholder="password"
            className="form-control w-25 m-auto"
          />
        </div>

        <button type="submit" className="btn btn-outline-warning">
          sign in
        </button>
      </form>

      <h5>
        Forget Password ?
        <Link className="text-danger" to={"/recovery"}>
          Click to change
        </Link>
      </h5>
    </div>
  );
}

export default Password;
