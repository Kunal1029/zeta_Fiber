import { Link } from "react-router-dom";
import Contact from "./Contact";
import Price from "./Price";
import TabsPrice from "./TabsPrice";
import Testimonial from "./Testimonial";
import { Button } from "./imports/MuiImports";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CallIcon from "@mui/icons-material/Call";

function Home() {
  return (
    <div className="">
      {/* <Header /> */}
      <div className="hero_area b  firstSectionHome1">
        {/* <!-- slider section --> */}
        <section className="slider_section">
          <div className="subContainer ">
            <div className="row">
              <div className=" animate__animated animate__fadeInLeft">
                <div className="detail-box newEdit1 ">
                  {/* <h1 className=""><b className="text-dark bg-white">Affordable</b> <br /><span className="bg-primary text-white">Reliable</span> <br /> <b className="bg-warning text-white">High-Speed Internet</b></h1> */}
                  {/* <h1 className=""><b className="text-dark bg-white">Affordable</b> <br /><span className="text-dark bg-white">Reliable</span> <br /> <b className="text-dark bg-white">High-Speed Internet</b></h1> */}
                  {/* <h1 className=""><b className="bg-dark text-white">Affordable</b> <br /><span className="bg-info text-white">Reliable</span> <br /> <b className="bg-warning text-white">High-Speed Internet</b></h1> */}
                  <h1 className=" mb-5">
                    Affordable <br />
                    Reliable <br /> High-Speed Internet
                  </h1>
                  <h6 className="col-md-9 mb-5">
                    Bringing affordable, high-quality internet to every
                    doorstep. Whether for work, play, or study, 1 Zeta keeps you
                    connected effortlessly.
                  </h6>
                  <div className="mb-5  animate__animated animate__fadeInUpBig">
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
                      className="mt-3"
                      endIcon={
                        <ArrowCircleRightIcon
                          sx={{
                            fontSize: 40,
                            width: 30,
                            height: 40,
                            verticalAlign: "bottom",
                          }}
                        />
                      }
                    >
                      View Plans
                    </Button>
                    &nbsp;
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "40px",
                        padding: "5px 22px",
                        "&:hover": {
                          backgroundColor: "primary.dark",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        },
                        "&:focus": {
                          outline: "none", // Remove the focus ring
                        },
                      }}
                      className="bg-warning text-dark mt-3"
                      endIcon={
                        <CallIcon
                          sx={{
                            fontSize: 40,
                            width: 22,
                            height: 40,
                            verticalAlign: "bottom",
                          }}
                        />
                      }
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate__animated animate__fadeInRight">
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    <div className="img-box">
                      {/* <img
                        src="./image/slider1.png"
                        alt=""
                        width="350"
                        height="765"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="subContainer layout_padding ">
        <div className={`mb-5    `}>
          <div className="heading_container heading_center">
            <h2>Our Plans</h2>
          </div>
        </div>

        <div className={`text-center    `}>
          {/* <h3>Zita Fiber</h3> */}
          {/* <PriceSlide /> */}
          <TabsPrice />
        </div>
      </section>

      {/* <MultiCardsCarousel /> */}

      {/* <!-- end service section --> */}

      {/* <!-- about section --> */}

      <section className="about_section layout_padding">
        <div className="subContainer ">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container mb-4">
                  <h2>About Us</h2>
                </div>
                <p>
                  1 Zeta is your trusted partner in{" "}
                  <b className="text-primary">high-speed internet</b>, dedicated
                  to delivering{" "}
                  <b className="text-primary">
                    affordable, reliable connectivity
                  </b>{" "}
                  for homes and businesses alike. We believe in making quality
                  internet accessible to all, with customer service that&#39;s
                  always ready to help. Experience internet without limits –
                  with <b className="text-primary">1 Zeta </b>, you&#39;re
                  connected to more.
                </p>
                <Button
                  component={Link} // Use `component={Link}` to make Button behave like a link
                  to="/about" // Define the link target
                  variant="contained"
                  sx={{
                    color: "white",
                    borderRadius: "40px",
                    padding: "12px 24px",
                    "&:hover": {
                      color:"white",
                      backgroundColor: "primary.dark",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    },
                    "&:focus": {
                      outline: "none", // Remove the focus ring, but consider custom focus styles for accessibility
                    },
                  }}
                  className="mt-4"
                  
                >
                  Read More
                </Button>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="./image/about-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end about section --> */}

      {/* <!-- server section --> */}

      <section className="server_section  ">
        <div className="subContainer ">
          <div className="row">
            <div className="col-md-6">
              
              <div className="img-box">
                <img src="./image/server-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                
                <div className="heading_container mb-3">
                  <h2 className="mb-3 mt-4 text-white">Stay Connected, Stay Ahead</h2>
                  <p>
                    Whether you&#39;re working from home, streaming your
                    favourite shows, or connecting with loved ones, 1 Zeta keeps
                    you online without interruptions. Our high-speed, affordable
                    internet adapts to your lifestyle, so you can focus on what
                    matters most.
                  </p>

                  <p>
                    Enjoy seamless browsing, crystal-clear video calls, and fast
                    downloads with a network you can trust – 1 Zeta is here to
                    elevate your digital experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end server section --> */}

      {/* <!-- price section --> */}

      <Price />

      <Testimonial />

      <Contact />
      {/* <!-- end contact section --> */}
    </div>
  );
}

export default Home;
