import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-dark" aria-label="Main navigation">
        <div className="container" ref={navbarRef}>
          <a className="navbar-brand logo-text" href="index.html">
            <img src="./assets/images/FIW.png" alt="Logo" width="105" height="38" className="d-inline-block align-text-top" />
          </a>
 
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link active" to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mainabout" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services" onClick={() => setIsOpen(false)}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mainplan" onClick={() => setIsOpen(false)}>
                  Plans
                </Link>
              </li>
            
              <li className="nav-item">
                <Link className="nav-link" to="/maincontact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  <i className="fa-solid fa-circle-user fa-2xl"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <Link className="dropdown-item" to={"/login"}>Login</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/register"}>Register</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="privacy.html" onClick={() => setIsOpen(false)}>Privacy Policy</Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <span className="nav-item social-icons">
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x"></i>
                </a>
              </span>
            </span> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
