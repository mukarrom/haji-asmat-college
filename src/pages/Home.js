import React from "react";
import Marquee from "react-fast-marquee";
import AboutCollege from "../components/Home/AboutCollege";
import Carousel from "../components/Home/Carousel";
import Facility from "../components/Home/Facility";
import MarqueeText from "../components/Home/MarqueeText";
import NoticeEventNews from "../components/Home/Cards";
// import WelcomeImage from "../../components/Home/WelcomeImage";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <div className="bg-base-100 bg-base-100 w-full py-3 relative">
        <div className="absolute top-0 right-0 bg-primary z-50 p-2 text-white font-bold text-2xl">নোটিশ</div>
        <Marquee direction="left">
          <MarqueeText></MarqueeText>
        </Marquee>
      </div>
      <Carousel></Carousel>
      <Facility></Facility>
      <AboutCollege></AboutCollege>
      <NoticeEventNews></NoticeEventNews>
      <Contact />

      {/* <WelcomeImage></WelcomeImage> */}
    </div>
  );
};

export default Home;
