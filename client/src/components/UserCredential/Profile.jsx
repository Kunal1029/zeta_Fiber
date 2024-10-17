import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidation } from "../helper/Validate";
import { useState, useEffect } from "react";
import convertToBase64 from "../helper/convert";
import Header from "../Header/Header";
// import { useAuthStore } from "../../store/store.js";
import useFetch from "../hooks/fetchHooks.js";
import { updateUser } from "../helper/helper.js";
import { useNavigate } from "react-router-dom";

function Profile() {
  // const username = useAuthStore((state) => state.auth.username);
  const { isLoading, apiData, serverError } = useFetch();
  
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: apiData?.firstName || "",
      lastName: apiData?.lastName || "",
      email: apiData?.email || "",
      mobile: apiData?.mobile || "",
      address: apiData?.address || "",
    },
    validate: profileValidation,  // Comment this out to temporarily disable validation
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || apiData?.profile || "" });
      try {
        let userUpdate = updateUser(values)
        toast.promise(userUpdate,{
          loading: "Updating...",
          success: "Updated Successfully",
          error :"COuld not update!"
        })
      } catch (error) {
        return error
      }
    },
  });
  
  // Add this to check validation issues
  useEffect(() => {
    console.log("Formik Errors:", formik.errors);  // Check for validation errors
  }, [formik.errors]);
  
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
    console.log("File Uploaded:", e.target.files[0]);  // Debugging log
  };
  
  function userLogout(){
    localStorage.removeItem('token')
    navigate('/')
  }

  if (isLoading) return <h1 className="text-success">Loading...</h1>;
  if (serverError) return <h1 className="text-danger">{serverError.message}</h1>;

  return (
    <div className="text-white sub_page bg-dark">
      <Header />
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <h1>You Can Update Your Details Here</h1>

      <form className="mt-5" onSubmit={(e) => {
        e.preventDefault(); // Prevent default just to see if the form is triggering
        console.log("Form Submitted");
        formik.handleSubmit(e);
      }}>
        <div className="text-center mb-3">
          <label htmlFor="profile" className="mb-3">
            <img src={file || apiData?.profile || "./avt.png"} className="rounded w-25" alt="Profile" />
          </label>
          <input onChange={onUpload} type="file" id="profile" name="profile" />
        </div>

        <div className="mb-3">
          <input
            type="text"
            {...formik.getFieldProps("firstName")}
            placeholder="First Name"
            className="form-control w-50 m-auto"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            {...formik.getFieldProps("lastName")}
            placeholder="Last Name"
            className="form-control w-50 m-auto"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            {...formik.getFieldProps("mobile")}
            placeholder="Phone Number"
            className="form-control w-50 m-auto"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            {...formik.getFieldProps("email")}
            placeholder="Email"
            className="form-control w-50 m-auto"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            {...formik.getFieldProps("address")}
            placeholder="Address"
            className="form-control w-50 m-auto"
          />
        </div>

        <button type="submit" className="btn btn-outline-warning">
          Update
        </button>
      </form>

      <h5>
        Come back later
        <button className="text-danger" onClick={userLogout}>
          Logout
        </button>
      </h5>
    </div>
  );
}

export default Profile;
