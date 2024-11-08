import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      {/* <!-- info section --> */}

      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                      Bhanot Market, 1 Turner Road, Majra, Dehradun, Uttarakhand
                      - 248002
                    </span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +91-9012359090</span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>onezetaassociate@gmail.com</span>
                  </a>
                </div>
              </div>
              <img
                    src="./image/FL.png"
                    alt="Logo"
                    width="150"
                    height="65"
                    className=" d-inline-block align-text-top"
                  />
              {/* <div className="info_social">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div> */}
            </div>
            <div className="col-md-4 text-center">
              <div className="info_link_box ">
                <h4>Links</h4>
                <div className="info_links">
                  <Link to={"/"}>Home</Link>
                  <Link to={"/about"}>About</Link>
                  <Link to={"/service"}>Services</Link>
                  <Link to={"/price"}>Pricing</Link>
                  <Link to={"/contact"}>Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="info_link_box">
                <h4>Legal</h4>
                <div className="info_links">
                  <Link to={"/"}>T&C</Link>
                  <Link to={"/about"}>Refund policy</Link>
                  <Link to={"/service"}>Privacy policy</Link>
                  {/* <Link to={"/service"}>
                    <img
                      src="./image/FL.png"
                      alt="Logo"
                      width="150"
                      height="65"
                      className=" d-inline-block align-text-top"
                    />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end info section --> */}
    </div>
  );
}

export default Footer;
