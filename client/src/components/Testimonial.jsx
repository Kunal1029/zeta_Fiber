// import Cards from "./cards/Cards";

// import MultiCardsCarousel from "./cards/MultiCardsCarousel";

function Testimonial() {
  return (
    <div>
      {/* <!-- client section --> */}
      <section className="client_section  ">
        <div className="subContainer   ">
          <div className="heading_container heading_center">
            <h2 className=" ">Testimonial</h2>
            <p className="">
              Even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to
            </p>
          </div>
        </div>
        <div className="container px-0 ">
          <div
            id="customCarousel2"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="box">
                        <div className="img-box">
                          <img src="./image/.png" alt="" />
                        </div>
                        <div className="detail-box">
                          <div className="client_info">
                            <div className="client_name">
                              <h5>Amit Sharma</h5>
                              {/* <h6>Customer</h6> */}
                            </div>
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <p>
                          I switched to 1 Zeta a few months ago, and I couldn’t be happier. The speed is fantastic, and the customer support is very responsive. It’s great to have a reliable internet connection that doesn’t cost a fortune!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="box">
                        <div className="img-box">
                          <img src="images/client.jpg" alt="" />
                        </div>
                        <div className="detail-box">
                          <div className="client_info">
                            <div className="client_name">
                              <h5> Priya Deshmukh</h5>
                              {/* <h6>Customer</h6> */}
                            </div>
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <p>
                          1 Zeta has been a game-changer for my home office setup. The connection is fast and steady, even with multiple devices. I highly recommend them to anyone looking for affordable and quality internet.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="box">
                        <div className="img-box">
                          <img src="images/client.jpg" alt="" />
                        </div>
                        <div className="detail-box">
                          <div className="client_info">
                            <div className="client_name">
                              <h5>Rajesh Gupta</h5>
                              {/* <h6>Customer</h6> */}
                            </div>
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <p>
                          After dealing with inconsistent connections, switching to 1 Zeta has been amazing. The setup was quick, and their customer service team was so helpful. I finally have internet I can rely on.

                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-box">
              <a
                className="carousel-control-prev"
                href="#customCarousel2"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#customCarousel2"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end client section --> */}

      {/* <div>
        <h1 className="mb-3" style={{ textAlign: "center", marginTop: "20px" }}>
          Our Mission & Vision
        </h1>

        <Cards />
      </div> */}

      {/* <MultiCardsCarousel /> */}
    </div>
  );
}

export default Testimonial;
