import About from "./About";
import Contact from "./Contact";
import Price from "./Price";
import TabsPrice from "./TabsPrice";
import Testimonial from "./Testimonial";
import { Button } from "./imports/MuiImports";

function Home() {
  return (
    <div className="">
      {/* <Header /> */}
      <div className="hero_area b">
        {/* <!-- slider section --> */}
        <section className="slider_section firstSectionHome1">
          <div className="subContainer ">
            <div className="row">
              <div className="col-md-6 animate__animated animate__fadeInLeft">
                <div className="detail-box">
                  <h1>
                    Fast & Secure <br />
                    Web Hosting
                  </h1>
                  <p className="text-white">
                    Anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsuanything embarrassing hidden in the middle of
                    text. All the Lorem Ipsumm
                  </p>
                  <div className="btn-box animate__animated animate__fadeInUpBig">
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

      <section className="service_section layout_padding firstSectionHome">
        <div className={`container mb-5    `}>
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

      {/* <!-- end service section --> */}

      {/* <!-- about section --> */}

      <About />

      {/* <!-- end about section --> */}

      {/* <!-- server section --> */}

      <section className="server_section  firstSectionHome">
        <div className="subContainer     ">
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

      <Price />

      <Testimonial />

      <Contact />
      {/* <!-- end contact section --> */}
    </div>
  );
}

export default Home;
