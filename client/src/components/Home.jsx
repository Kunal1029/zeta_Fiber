import TabsPrice from "./TabsPrice";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

function Home() {
 
  const [isObserverReady, setObserverReady] = useState(false); // Prevents observing too soon

  useEffect(() => {
    const observerOptions = {
      threshold: 0.34, // Trigger when 50% of the element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const elementsToObserve = document.querySelectorAll(".animate-on-scroll");

    elementsToObserve.forEach((element) => observer.observe(element));

    // Clean up on unmount
    return () => observer.disconnect();
  }, [isObserverReady]);

  useEffect(() => {
    // Add a small delay before initializing the observer to ensure DOM is ready
    setTimeout(() => setObserverReady(true), 100);
  }, []);

  return (
    <div className="">
      {/* <Header /> */}
      <div className="hero_area b">
        {/* <!-- slider section --> */}
        <section className="slider_section firstSectionHome">
          {/* <div
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
          </div> */}
          <div className="subContainer ">
            <div className="row">
              <div className="col-md-6 animate__animated animate__fadeInLeft">
                <div className="detail-box">
                  <h1>
                    Fast & Secure <br />
                    Web Hosting
                  </h1>
                  <p>
                    Anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsuanything embarrassing hidden in the middle of
                    text. All the Lorem Ipsumm
                  </p>
                  <div className="btn-box animate__animated animate__fadeInUpBig">
                    {/* <a href="" className="btn-1">
                      {" "}
                      View Plans
                    </a> */}
                    <Button variant="contained">View Plans</Button> &nbsp;
                    <Button variant="contained" className="bg-warning">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate__animated animate__fadeInRight">
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
        </section>
      </div>

      <section className="service_section layout_padding firstSectionHome">
        <div className={`container mb-5  myAnimLeft animate-on-scroll`}>
          <div className="heading_container heading_center">
            <h2>Our Plans</h2>
          </div>

        </div>

        <div
          className={`text-center  myAnimLeft animate-on-scroll`}
        >
          {/* <h3>Zita Fiber</h3> */}
          {/* <PriceSlide /> */}
          <TabsPrice />
        </div>

      </section>

      {/* <!-- end service section --> */}

      {/* <!-- about section --> */}

      <section className="about_section   layout_padding-bottom glass firstSectionHome">
        <div className="subContainer ">
          <div className="row  myAnimLeft animate-on-scroll">
            <div className={`col-md-6`}>
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
                <Button variant="contained" className="bg-warning">
                  Read More{" "}
                </Button>
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

      <section className="server_section  firstSectionHome">
        <div className="subContainer  myAnimLeft animate-on-scroll ">
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
                <div className="heading_container mb-3">
                  <h2>Let us manage your server</h2>
                  <p>
                    Internet. It uses a dictionary of over 200 Latin words,
                    combined with a handful of model sentence structures, to
                    generate Lorem Ipsum which looks reasonable. The generated
                    Lorem Ipsum is therefore
                  </p>
                </div>
                <Button variant="contained" className="">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end server section --> */}

      {/* <!-- price section --> */}

      <section className="price_section layout_padding  firstSectionHome">
        <div className="subContainer  ">
          <div className="heading_container heading_center">
            <h2>Our Services</h2>
          </div>
          <div className="price_container">
            <div className="box box1 animate-on-scroll ">
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
                <Button variant="contained" className="">
                  See Detail
                </Button>
              </div>
            </div>
            <div className="box box2 animate-on-scroll">
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
                <Button variant="contained" className="">
                  See Detail
                </Button>
              </div>
            </div>
            <div className="box box3 animate-on-scroll">
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
                <Button variant="contained" className="">
                  See Detail
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- price section --> */}

      {/* <!-- client section --> */}
      <section className="client_section  firstSectionHome">
        <div className="subContainer myAnimLeft animate-on-scroll">
          <div className="heading_container heading_center">
            <h2 className="box1 animate-on-scroll">Testimonial</h2>
            <p className="box3 animate-on-scroll">
              Even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to
            </p>
          </div>
        </div>
        <div className="container px-0 box2 animate-on-scroll">
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
      <section className="contact_section layout_padding-bottom  firstSectionHome">
        <div className="container  myAnimLeft animate-on-scroll">
          <div className="heading_container heading_center">
            <h2 className="box3 animate-on-scroll">Get In Touch</h2>
          </div>
          <div className="row ">
            <div className="col-md-8 col-lg-6 mx-auto p-5 blurrybglast ">
              <div className="form_container ">
                <form action="">
                  <div className="box1 animate-on-scroll">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="box1 animate-on-scroll">
                    <input type="email" placeholder="Your Email" />
                  </div>
                  <div className="box1 animate-on-scroll"> 
                    <input type="text" placeholder="Your Phone" />
                  </div>
                  <div className="box1 animate-on-scroll">
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Message"
                    />
                  </div>
                  <div className="btn_box box1 animate-on-scroll">
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
      {/* <!-- end contact section --> */}
    </div>
  );
}

export default Home;
