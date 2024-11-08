import { Link } from "react-router-dom";
import "../../App.css";
// import UpperHeader from "./UpperHeader";

function Header() {

  return (
    <div className=" subcontainer ">
      {/* <!-- header section strats --> */}
      {/* <UpperHeader/> */}
      <header className="header_section fixed-top">
        <div className="border subcontainer " >
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand image-container" href="index.html">
              <img
                src="./image/FL.png"
                alt="Logo"
                width="150"
                height="65"
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
              <ul className="navbar-nav ml-auto">
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

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-toggle="collapse"
                    data-target="#ks"
                    aria-controls="ks"
                    // onClick={toggleProfileDropDown}
                  >
                    Profile
                  </a>
                  <ul className="dropdown-menu" id="ks">
                    <li>
                      <a className="dropdown-item" href="#">
                        <Link to={"/login"}  className="text-dark">Login</Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item " href="#">
                        <Link to={"/register"} className="text-dark">Register</Link>
                      </a>
                    </li>
                    
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* <!-- end header section --> */}
    </div>
  );
}

export default Header;
