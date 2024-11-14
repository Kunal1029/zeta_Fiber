import { useState } from "react";
import Gradient from "../Animation/Gradient";
import "./FormCss.css";

function UserLogin() {
  const [loginWay, setLoginWay] = useState(true);

  return (
    <section className="registerForm ">
      <div className="container">
        <div className="signupSection">
          <div className="info col-md-5">
            <h2 className="">Welcome Back</h2>
            <p>Sign in fast like OneZeta</p>
            <Gradient />
          </div>

          <form
            action="#"
            method="POST"
            className="signupForm col-md-5"
            name="signupform "
          >
            <h2 className="mt-5 mb-3">Login</h2>
            <ul className="noBullet">
              {/* two ways */}

              <li>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  className="inputFields"
                  id="email"
                  name="email"
                  placeholder="Email or Phone"
                  value=""
                />
              </li>

              {loginWay && (
                <>
                  <li>
                    <label htmlFor="password"></label>
                    <input
                      type="password"
                      className="inputFields"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value=""
                      onInput="return passwordValidation(this.value)"
                      required
                    />
                  </li>
                </>
              )}

              {!loginWay && (
                <>
                  <li>
                    <label htmlFor="OTP"></label>
                    <input
                      type="password"
                      className="inputFields"
                      id="OTP"
                      name="OTP"
                      placeholder="OTP"
                      value=""
                      onInput="return passwordValidation(this.value)"
                      required
                    />
                  </li>
                </>
              )}

              <li className="mb-4 mt-3">
                <a
                  className=" text-warning otherWayBtn cursor-pointer"
                  onClick={() => {
                    setLoginWay(!loginWay); // Toggle loginWay state
                  }}
                >
                  or Login via {loginWay ? "OTP" : "Password"}
                </a>
              </li>

              <li id="center-btn">
                <div className="my-3">
                  <a className="btn" href="#your-link">
                    Submit
                  </a>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UserLogin;
