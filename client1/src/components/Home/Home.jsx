import About from "../About/About";
import Wave from "../Animation/Wave";
import Company from "../companies/Company";
import Contact from "../Contact/Contact";
import FAQs from "../FAQ/FAQs";
import Hero from "../Hero";
import MyLocation from "../MyLocation";
import OurWork from "../OurWork";
import Plan from "../Plans/Plan";
import Services from "../Services";
import Testimonial from "../Testimonial";

function Home() {
  return (
    <div>

      <Hero />

      <Plan />

      <About />

      <Services />

      <Company />

      <OurWork />

      <Wave />

      <Testimonial />

      <FAQs />

      <Contact />

      <MyLocation />

    </div>
  );
}

export default Home;
