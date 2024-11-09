import "./Contact.css"


function MainContact() {
  return (
    <div>
    {/* <!-- Contact --> */}
    <section className="contact d-flex align-items-center py-5 " id="contact">
      <div className="container-fluid contact text-light mt-5">
        <div className="row myRow mt-5">
          <div
            className="col-lg-6 mt-5 d-flex justify-content-center justify-content-lg-end align-items-center px-lg-5"
            data-aos="fade-right"
          >
            <div style={{ width: "90%" }}>
              <div className="text-center text-lg-start py-4 pt-lg-0">
                <p>CONTACT</p>
                <h2 className="py-2">Send your query</h2>
                <p className="para-light">
                  At 1 Zeta, we’re dedicated to providing you with the best
                  service and support. Whether you’re interested in a new
                  plan, need help with your current service, or just have
                  questions, feel free to reach out. We’re only a message
                  away!
                </p>
              </div>
              <div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group py-2">
                      <input
                        type="text"
                        className="form-control form-control-input"
                        id="exampleFormControlInput1"
                        placeholder="Enter name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group py-2">
                      <input
                        type="email"
                        className="form-control form-control-input"
                        id="exampleFormControlInput2"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group py-1">
                  <input
                    type="email"
                    className="form-control form-control-input"
                    id="exampleFormControlInput3"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group py-2">
                  <textarea
                    className="form-control form-control-input"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="my-3">
                <a
                  className="btn form-control-submit-button"
                  href="#your-link"
                >
                  Submit
                </a>
              </div>
            </div>
            {/* <!-- end of div --> */}
          </div>
          {/* <!-- end of col --> */}
          <div
            className="col-lg-6 text-center myMap mt-5 "
            data-aos="fade-down"
          >

            <h2>Check Our Locaction directly</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3445.2800904882497!2d77.99369847519844!3d30.28608697480281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBhanot%20Market%2C%201%20Turner%20Road%2C%20Majra%2C%20Dehradun%2C%20Uttarakhand%20-%20248002!5e0!3m2!1sen!2sin!4v1731143746008!5m2!1sen!2sin"
              
              style={{border:"1px solid orange",borderRadius:"5px"}}
              allowfullscreen=""
              loading="lazy"
              title="Google Maps Location - Bhanot Market, Dehradun"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* <!-- end of col --> */}
        </div>
        {/* <!-- end of row --> */}
      </div>
      {/* <!-- end of container --> */}
    </section>
    {/* <!-- end of contact --> */}
  </div>
  )
}

export default MainContact
