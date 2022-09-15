import React from "react";
import Marquee from "react-fast-marquee";
import WelcomeImage from "../components/Home/WelcomeImage";
import AboutCollege from "../components/Home/AboutCollege";
import Cards from "../components/Home/Cards";
import Carousel from "../components/Home/Carousel";
import Facility from "../components/Home/Facility";
import MarqueeText from "../components/Home/MarqueeText";
import ContactAddress from "../components/Contact/ContactAddress";
import ContactForm from "../components/Contact/ContactForm";
import Map from "../components/Contact/Map";
// import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <div className="bg-base-100 w-full flex flex-row-reverse">
        <div className="bg-secondary p-2 text-white font-bold text-2xl">
          নোটিশ
        </div>
        <Marquee direction="left">
          <MarqueeText />
        </Marquee>
      </div>
      <Carousel />
      <Facility />
      <AboutCollege />
      <Cards />
      <hr className="mt-16 h-[2px] bg-gray-300"/>
      <div className="contact">
      <div className="flex flex-col md:flex-row my-24">
        <ContactAddress/>
        <ContactForm />
      </div>
      <div>
        <Map />
      </div>
      </div>

      <WelcomeImage></WelcomeImage>
    </div>
  );
};

export default Home;
