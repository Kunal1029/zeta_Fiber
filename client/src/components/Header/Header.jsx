import { Link } from "react-router-dom";
import "../../App.css";
// import UpperHeader from "./UpperHeader";

function Header() {
  return (
    <div>
      {/* <!-- header section strats --> */}
      {/* <UpperHeader/> */}
      <header className="header_section bg-light">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand image-container" href="index.html">
              <img
                src="./image/FL.png"
                alt="Logo"
                width="170"
                height="85"
                className=" d-inline-block align-text-top"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>

            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto Headermenu">
                <li className="nav-item active">
                  <Link to={"/"} className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/about"} className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/service"} className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/price"} className="nav-link">
                    Plans
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/contact"} className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
              {/* Login start */}

              <div>
                <p className="text-danger mt-3"></p>
              </div>

              {/* <!-- Example single danger button --> */}
              <div className="userDD">
                <button
                  type="button"
                  className="btn"
                >
                  <i className="fa-regular fa-xl fa-circle-user" style={{color:"#003E87"}}></i>
                  <i className="fa-solid fa-caret-down"></i>
                </button>

                {/* {userDropDown ? */}
                <ul className="">
                  <li>
                    <Link to={"/login"}>Login</Link>
                  </li>

                  <li  className="mt-1">
                    <Link to={"/register"}>Register</Link>
                  </li>
                </ul>
                {/* : ""} */}
              </div>

              
            </div>
          </nav>
        </div>
      </header>
      {/* <!-- end header section --> */}

      
    </div>
  );
}

export default Header;
