import React from "react";
import AboutCollege from "../../components/Home/AboutCollege";
import Carousel from "../../components/Home/Carousel";
import Facility from "../../components/Home/Facility";
import NoticeEventNews from "../../components/Home/NoticeEventNews";
import WelcomeImage from "../../components/Home/WelcomeImage";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Facility></Facility>
      <AboutCollege></AboutCollege>
      <NoticeEventNews></NoticeEventNews>
      <WelcomeImage></WelcomeImage>
    </div>
  );
};

export default Home;
