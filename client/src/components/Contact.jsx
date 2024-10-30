// import Header from "./Header/Header";

import { Button } from "./imports/MuiImports";

function Contact() {
  return (
    <div>
   
   <section className="contact_section layout_padding-bottom ">
        <div className="container    ">
          <div className="heading_container heading_center">
            <h2 className=" ">Get In Touch</h2>
          </div>
          <div className="row ">
            <div className="col-md-8 col-lg-6 mx-auto p-5 blurrybglast ">
              <div className="form_container ">
                <form action="">
                  <div className=" ">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className=" ">
                    <input type="email" placeholder="Your Email" />
                  </div>
                  <div className=" ">
                    <input type="text" placeholder="Your Phone" />
                  </div>
                  <div className=" ">
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Message"
                    />
                  </div>
                  <div className="btn_box  ">
                    <Button variant="contained" className="">
                      Send
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default Contact;
