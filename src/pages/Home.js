import React from "react";
import Marquee from "react-fast-marquee";
import AboutCollege from "../components/Home/AboutCollege";
import Cards from "../components/Home/Cards";
import Carousel from "../components/Home/Carousel";
import Facility from "../components/Home/Facility";
import MarqueeText from "../components/Home/MarqueeText";
// import WelcomeImage from "../../components/Home/WelcomeImage";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <div className="bg-base-100 w-full flex flex-row-reverse">
        <div className="bg-secondary p-2 text-white font-bold text-2xl">নোটিশ</div>
        <Marquee direction="left">
          <MarqueeText></MarqueeText>
        </Marquee>
      </div>
      <Carousel></Carousel>
      <Facility></Facility>
      <AboutCollege></AboutCollege>
      <Cards></Cards>
      <Contact />

      {/* <WelcomeImage></WelcomeImage> */}
    </div>
  );
};

export default Home;
