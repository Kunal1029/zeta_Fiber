// import Header from "./Header/Header";
function Contact() {
  return (
    <div>
   
      {/* <!-- contact section --> */}
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Get In Touch</h2>
          </div>
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto">
              <div className="form_container">
                <form action="">
                  <div>
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div>
                    <input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Your Phone" />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Message"
                    />
                  </div>
                  <div className="btn_box ">
                    <button>SEND</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end contact section --> */}

    
    </div>
  );
}

export default Contact;
