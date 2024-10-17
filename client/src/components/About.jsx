// import Header from "./Header/Header";

function About() {
  return (
    <div>
     {/* <Header /> */}
    
      {/* <!-- about section --> */}

      <section className="about_section layout_padding">
        <div className="container  ">
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
                  repeat predefined chunks{" "}
                </p>
                <a href="">Read More</a>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end about section --> */}

     
    </div>
  );
}

export default About;
