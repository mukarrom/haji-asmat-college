import React from "react";
import Marquee from "react-fast-marquee";
import AboutCollege from "../../components/Home/AboutCollege";
import Carousel from "../../components/Home/Carousel";
import Facility from "../../components/Home/Facility";
import MarqueeText from "../../components/Home/MarqueeText";
import NoticeEventNews from "../../components/Home/NoticeEventNews";
// import WelcomeImage from "../../components/Home/WelcomeImage";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Marquee direction="left" className="bgGradientCrimson">
        <MarqueeText></MarqueeText>
      </Marquee>
      <Carousel></Carousel>
      <Facility></Facility>
      <AboutCollege></AboutCollege>
      <NoticeEventNews></NoticeEventNews>
      <Contact/>
  
      {/* <WelcomeImage></WelcomeImage> */}
    </div>
    
  );
};

export default Home;
