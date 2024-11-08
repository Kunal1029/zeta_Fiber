/* eslint-disable react/prop-types */

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { zetaPlans } from "../priceCardData";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    // partialVisibilityGutter: 140, // optional, defaults to 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    // partialVisibilityGutter: 30, // optional, defaults to 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    // partialVisibilityGutter: 30, // optional, defaults to 1
  },
};

export function MultiCardsCarousel({ deviceType }) {
  return (
    <div className="text-center container">
      <Carousel
      focusOnSelect={true}
    //   centerMode={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // Renders carousel on server-side
        infinite={true}
        autoPlay={deviceType !== "mobile"}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={500}
        containerclassName="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListclassName="custom-dot-list-style"
        itemclassName="carousel-item-padding-40-px"
      >
        {zetaPlans.map((plan,i)=>(
            <div key={i} className="card border-0" style={{width: "23rem"}}>
            <div className="card-body">
              <h5 className="card-title mt-2 mb-4">{plan.name}</h5>
              <h6 className="card-subtitle mb-3 text-body-secondary">{plan.speed} with {plan.data}</h6>
              <p className="card-text">Validity {plan.validity}, Also available in {plan.availablePlans[0] }, { plan.availablePlans[1]}, { plan.availablePlans[2]}</p>
              <a href="#" className="card-link">Any link</a>
              <a href="#" className="card-link">Any button</a>
            </div>
          </div>
        ))}
        
      </Carousel>
    </div>
  );
}

export default MultiCardsCarousel;
