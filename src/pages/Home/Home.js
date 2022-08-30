import React from "react";
import AboutCollege from "../../components/Home/AboutCollege";
import Carousel from "../../components/Home/Carousel";
import Facility from "../../components/Home/Facility";
import NoticeEventNews from "../../components/Home/NoticeEventNews";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Facility></Facility>
      <AboutCollege></AboutCollege>
      <NoticeEventNews></NoticeEventNews>
    </div>
  );
};

export default Home;
