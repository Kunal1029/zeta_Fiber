/* eslint-disable no-unused-vars */
import Header from "../Header/Header";
import { useAuthStore } from "../../store/store";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { generateOTP, verifyOTP } from "../helper/helper";
import useFetch from "../hooks/fetchHooks";
import { useNavigate } from "react-router-dom";

function Recovery() {
  const username  = useAuthStore((state) => state.auth.username);
  // const username  = "ks";
  // const { apiData } = useFetch();

  const navigate = useNavigate();

  const [OTP, setOTP] = useState();

  useEffect(() => {
    generateOTP(username).then((OTP) => {
      console.log(OTP, " OTP");
      if (OTP)
        return toast.success(
          `OTP has been sent to your email ${
             "email error check"
          }`
        );
      return toast.error("Problem while generating otp!");
    });
  }, [ username]);

  async function onsubmit(e) {
    e.preventDefault();
    try {
      let { status } = await verifyOTP({ username, code: OTP });
      if (status === 201 || status === 200) {
        toast.success ("Verify Successfully");
        return navigate("/reset");
      }
    } catch (error) {
      return toast.error("Wrong OTP! Check email again");
    }
  }

  // handler of resend otp
  function resendOTP() {
    console.log(username , "  resendOtp Recovery.jsx ")
    // console.log(apiData , "  resendOtp Recovery.jsx ")
    let sendPromise = generateOTP(username);

    toast.promise(sendPromise, {
      loading: "Sending...",
      success: (
        <b>
          OTP has been sent to your email {  "check user email"}
        </b>
      ),
      error: <b>Could not send it!</b>,
    });

    sendPromise.then((otp) => {
      console.log(otp);
    });
  }

  return (
    <div className="text-white sub_page bg-dark">
      <Header />
      <h3>Recover Password</h3>
      <h6>Enter OTP to recover password</h6>

      <form className="" onSubmit={onsubmit}>
        <div className="mb-3">
          <label className="form-label mt-4 text-success">
            <p>Enter 6 digit otp sent to your email </p>
          </label>
          <input
            type="text"
            onChange={(e) => setOTP(e.target.value)}
            placeholder="Enter OTP"
            className="form-control m-auto mb-5"
          />
        </div>

        <button type="submit" className="btn btn-outline-warning">
          Recover
        </button>
      </form>

      <h6 className="mt-5">
        didn&#39;t get OTP? &nbsp;
        <button className="text-danger" onClick={resendOTP}>
          Click to Resend
        </button>
      </h6>
    </div>
  );
}

export default Recovery;
