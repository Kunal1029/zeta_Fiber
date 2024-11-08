
import "./Cards.css"; // Import custom styles
import { useEffect, useRef } from "react";
import { throttle } from "lodash";

const cardsData = [
  {
    c: "yellow",
    title: "Performance Hosting",
    description: "Blazing fast servers with top-tier security.",
    image:
      "https://images.pexels.com/photos/19226353/pexels-photo-19226353/free-photo-of-engineer-fixing-core-swith-in-data-center-room.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    c: "green",
    title: "Cloud Solutions",
    description: "Scale your business with our cloud infrastructure.",
    image:
      "https://images.pexels.com/photos/4779729/pexels-photo-4779729.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    c: "pink",
    title: "Dedicated Support",
    description: "24/7 technical support with guaranteed SLA.",
    image:
      "https://images.pexels.com/photos/28552806/pexels-photo-28552806/free-photo-of-rural-cell-tower-in-lush-green-field.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    c: "lightblue",
    title: "Affordable Plans",
    description: "Choose from flexible hosting plans.",
    image:
      "https://images.pexels.com/photos/4373998/pexels-photo-4373998.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Cards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = containerRef.current.scrollTop;
      const viewportHeight = window.innerHeight;

      Array.from(containerRef.current.children).forEach((card, index) => {
        const offset = scrollTop - index * viewportHeight;

        const text = card.querySelector(".text");
        const image = card.querySelector(".image");

        // Opposite transform effects
        const textTranslate = Math.min(100, Math.max(-100, offset * 0.2));
        const imageTranslate = Math.min(100, Math.max(-100, offset * -0.2));

        text.style.transform = `translateY(${textTranslate}px)`;
        image.style.transform = `translateY(${imageTranslate}px)`;
      });
    }, 16); // Throttle to ~60 FPS

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-container container-fluid" ref={containerRef}>
      {cardsData.map((card, index) => (
        <div key={index} className="scroll-page col-12">
          <div className="text text-center" style={{ backgroundColor: card.c }}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
          <div className="image">
            <img src={card.image} alt={card.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
