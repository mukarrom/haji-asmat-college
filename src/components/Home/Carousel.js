import React from "react";
import pic1 from "../../assets/college1.jpg";
import pic2 from "../../assets/college2.jpg";
import pic3 from "../../assets/college3.jpg";
import pic4 from "../../assets/college4.jpg";

const Carousel = () => {
  return (
    <div className="">
      <div class="carousel w-full h-[70vh]">
        <div id="item1" class="carousel-item w-full">
          <img src={pic1} class="w-full" alt=""/>
        </div>
        <div id="item2" class="carousel-item w-full">
          <img src={pic2} class="w-full" alt=""/>
        </div>
        <div id="item3" class="carousel-item w-full">
          <img src={pic3} class="w-full" alt=""/>
        </div>
        <div id="item4" class="carousel-item w-full">
          <img src={pic4} class="w-full" alt=""/>
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs  bg-crimson text-white">
          1
        </a>
        <a href="#item2" class="btn btn-xs  bg-crimson text-white">
          2
        </a>
        <a href="#item3" class="btn btn-xs  bg-crimson text-white">
          3
        </a>
        <a href="#item4" class="btn btn-xs  bg-crimson text-white">
          4
        </a>
      </div>
    </div>
  );
};

export default Carousel;
