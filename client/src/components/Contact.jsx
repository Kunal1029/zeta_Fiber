// import Header from "./Header/Header";

import { Button } from "./imports/MuiImports";
import "../App.css";

function Contact() {
  return (
    <div className="cnt">
      <section className=" ">
        <div className="HeadingCnt">
          <h2 className="mt-5 mb-3">
            Have Questions? Need Help? We&#39;re Here for You!
          </h2>
          <p>
            At 1 Zeta, we’re dedicated to providing you with the best service
            and support. Whether you’re interested in a new plan, need help with
            your current service, or just have questions, feel free to reach
            out. We’re only a message away!
          </p>
        </div>

        <div className="container contact-form">
          <div className="contact-image">
            <img
              src="https://image.ibb.co/kUagtU/rocket_contact.png"
              alt="rocket_contact"
            />
          </div>
          <form method="post">
            <h3>Drop Us a Message</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="txtName"
                    className="form-control"
                    placeholder="Your Name *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="txtEmail"
                    className="form-control"
                    placeholder="Your Email *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    className="form-control"
                    placeholder="Your Phone Number *"
                    value=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    name="txtMsg"
                    className="form-control"
                    placeholder="Your Message *"
                    style={{ width: "100%", height: "150px" }}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-center mt-3">

            
            <Button
              variant="contained"
              sx={{
                borderRadius: "40px",
                padding: "6px 24px",
                "&:hover": {
                  backgroundColor: "primary.dark",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                },
                "&:focus": {
                  outline: "none", // Remove the focus ring
                },
              }}
              className="mt-5"
            >
              Submit
            </Button></div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
