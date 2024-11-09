import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Plan.css";
import { Link } from "react-router-dom";

// Define your plans array here
const plans = [
  {
    name: "BASIC BUNDLE",
    speed: "100 Mbps",
    data: "500GB",
    validity: "1 Month",
    availablePlans: ["Monthly", "Quarterly", "Yearly"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "₹24/Month",
  },
  {
    name: "BUSINESS BUNDLE",
    speed: "200 Mbps",
    data: "1TB",
    validity: "1 Month",
    availablePlans: ["Monthly", "Quarterly", "Yearly"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "₹99/Month",
  },
  {
    name: "PREMIUM BUNDLE",
    speed: "500 Mbps",
    data: "Unlimited",
    validity: "1 Month",
    availablePlans: ["Monthly", "Quarterly", "Yearly"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "₹199/Month",
  },
  // You can add more plans here if needed
];

// Define responsive settings for the carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 570, min: 0 },
    items: 1,
  },
};

function Plan() {
  return (
    <section className="plans d-flex align-items-center py-5 myplans " style={{height:"100%"}} id="plans" >
      <div className="container text-light mt-5" >
        <div className="text-center pb-4">
          <p>OUR PLANS</p>
          <h2 className="py-2 mb-3">Explore unlimited possibilities</h2>
          <p className="para-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            asperiores, quia accusantium sunt corporis optio recusandae? Nostrum
            libero pariatur cumque, ipsa dolores voluptatibus voluptate alias
            sit fuga. Itaque, ea quo.
          </p>
        </div>
 
        {/* Carousel */}
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
          arrows
        >
          {/* Dynamically render plan cards */}
          {plans.map((plan, index) => (
            <div key={index} className="card bg-transparent px-4 mt-4 ms-2 me-2 mb-4">
              <h4 className="py-2">{plan.name}</h4>
              <p className="py-3">{plan.description}</p>
              <div className="block d-flex align-items-center">
                <p className="pe-2">
                  <i className="far fa-check-circle fa-1x"></i>
                </p>
                <p>
                  {plan.speed} with {plan.data}
                </p>
              </div>
              <div className="block d-flex align-items-center">
                <p className="pe-2">
                  <i className="far fa-check-circle fa-1x"></i>
                </p>
                <p>Validity: {plan.validity}</p>
              </div>
              <div className="block d-flex align-items-center">
                <p className="pe-2">
                  <i className="far fa-check-circle fa-1x"></i>
                </p>
                <p>Also available in {plan.availablePlans.join(", ")}</p>
              </div>
              <h4 className="py-3">{plan.price}</h4>
              <div className="my-3">
                <a className="btn" href="#your-link">
                  Buy
                </a>
              </div>
            </div>
          ))}
        </Carousel>
        {/* End of carousel */}



        <div className="my-3 text-center mt-5 mb-5">
          <Link className="btn" to={"/mainplan"}>
            View All Plans
          </Link>
        </div>


      </div>
    </section>
  );
}

export default Plan;
