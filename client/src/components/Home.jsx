import VerticalTabs from "./TabsPrice";

function Home() {
  return (
    <div className="">
      {/* <Header /> */}
      <div className="hero_area b">
        {/* <!-- slider section --> */}
        <section className="slider_section">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner ">

              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Fast & Secure <br />
                          Web Hosting
                        </h1>
                        <p>
                          Anything embarrassing hidden in the middle of text.
                          All the Lorem Ipsuanything embarrassing hidden in the
                          middle of text. All the Lorem Ipsumm
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn-1">
                            {" "}
                            Read More{" "}
                          </a>
                          <a href="" className="btn-2">
                            {" "}
                            Contact Us{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-lg-10 mx-auto">
                          <div className="img-box">
                            <img src="./image/slider-img.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Fast & Secure <br />
                          Web Hosting
                        </h1>
                        <p>
                          Anything embarrassing hidden in the middle of text.
                          All the Lorem Ipsuanything embarrassing hidden in the
                          middle of text. All the Lorem Ipsumm
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn-1">
                            {" "}
                            Read More{" "}
                          </a>
                          <a href="" className="btn-2">
                            {" "}
                            Contact Us{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-lg-10 mx-auto">
                          <div className="img-box">
                            <img src="/image/slider-img.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Fast & Secure <br />
                          Web Hosting
                        </h1>
                        <p>
                          Anything embarrassing hidden in the middle of text.
                          All the Lorem Ipsuanything embarrassing hidden in the
                          middle of text. All the Lorem Ipsumm
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn-1">
                            {" "}
                            Read More{" "}
                          </a>
                          <a href="" className="btn-2">
                            {" "}
                            Contact Us{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-lg-10 mx-auto">
                          <div className="img-box">
                            <img src="image/slider-img.png" alt="" />
                          </div>
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
                href="#customCarousel1"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#customCarousel1"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="service_section layout_padding">
        <div className="container mb-5">
          <div className="heading_container heading_center">
            <h2>Our Plans</h2>
          </div>
        </div>
        <div className="text-center">
           {/* <h3>Zita Fiber</h3> */}
          {/* <PriceSlide /> */}
          <VerticalTabs />
        </div>
      </section>

      {/* <!-- end service section --> */}

      {/* <!-- about section --> */}

      <section className="about_section layout_padding-bottom glass" > 
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  Words which don&#39;t look even slightly believable. If you
                  are going to use a passage of Lorem Ipsum, you need to be sure
                  there isn&#39;t anything embarrassing hidden in the middle of
                  text. All the Lorem Ipsum generators on the Internet tend to
                  repeat predefined chunks
                </p>
                <a href=""> Read More </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="/image/about-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end about section --> */}

      {/* <!-- server section --> */}

      <section className="server_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="./image/server-img.jpg" alt="" />
                <div className="play_btn">
                  <button>
                    <i className="fa fa-play" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Let us manage your server</h2>
                  <p>
                    Internet. It uses a dictionary of over 200 Latin words,
                    combined with a handful of model sentence structures, to
                    generate Lorem Ipsum which looks reasonable. The generated
                    Lorem Ipsum is therefore
                  </p>
                </div>
                <a href=""> Read More </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end server section --> */}

      {/* <!-- price section --> */}

      <section className="price_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Services</h2>
          </div>
          <div className="price_container">
            <div className="box">
              <div className="detail-box">
                <h2>
                  $ <span>49</span>
                </h2>
                <h6>Startup</h6>
                <ul className="price_features">
                  <li>2GB RAM</li>
                  <li>20GB SSD Cloud Storage</li>
                  <li>Weekly Backups</li>
                  <li>DDoS Protection</li>
                  <li>Full Root Access</li>
                  <li>24/7/365 Tech Support</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href=""> See Detail </a>
              </div>
            </div>
            <div className="box">
              <div className="detail-box">
                <h2>
                  $ <span>99</span>
                </h2>
                <h6>Standard</h6>
                <ul className="price_features">
                  <li>4GB RAM</li>
                  <li>50GB SSD Cloud Storage</li>
                  <li>Weekly Backups</li>
                  <li>DDoS Protection</li>
                  <li>Full Root Access</li>
                  <li>24/7/365 Tech Support</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href=""> See Detail </a>
              </div>
            </div>
            <div className="box">
              <div className="detail-box">
                <h2>
                  $ <span>149</span>
                </h2>
                <h6>Business</h6>
                <ul className="price_features">
                  <li>8GB RAM</li>
                  <li>100GB SSD Cloud Storage</li>
                  <li>Weekly Backups</li>
                  <li>DDoS Protection</li>
                  <li>Full Root Access</li>
                  <li>24/7/365 Tech Support</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href=""> See Detail </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- price section --> */}

      {/* <!-- client section --> */}
      <section className="client_section">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Testimonial</h2>
            <p>
              Even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to
            </p>
          </div>
        </div>
        <div className="container px-0">
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
                          <img src="./image/client.jpg" alt="" />
                        </div>
                        <div className="detail-box">
                          <div className="client_info">
                            <div className="client_name">
                              <h5>Morojink</h5>
                              <h6>Customer</h6>
                            </div>
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugia
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
                              <h5>Morojink</h5>
                              <h6>Customer</h6>
                            </div>
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugia
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
                              <h5>Morojink</h5>
                              <h6>Customer</h6>
                            </div>
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugia
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

      {/* <!-- contact section --> */}
      <section className="contact_section layout_padding-bottom">
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
                  <div className="btn_box">
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

export default Home;
