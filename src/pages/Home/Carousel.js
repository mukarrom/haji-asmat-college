import React from 'react';
import pic3 from '../../assets/college3.jpg';
import pic4 from '../../assets/college4.jpg';
import pic1 from '../../assets/cover.jpg'
import pic2 from '../../assets/main-building.jpg'


function Carousel() {
  return (
    <div className="">
      <div className="carousel w-full h-[100vh]">
        <div id="item1" className="carousel-item w-full">
          <img
              src={pic2}
              // src="https://demo.web3canvas.com/themeforest/unisco/images/slider-3.jpg"
              className="w-full"
              alt=""
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
              src={pic1}
            // src="http://kodeforest.net/html/uoe/extra-images/slider2.jpg"
            className="w-full"
            alt=""
          />
        </div>

        <div id="item3" className="carousel-item w-full">
          <img src={pic3} className="w-full" alt="" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={pic4} className="w-full" alt="" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs  bg-primary text-white">
          1
        </a>
        <a href="#item2" className="btn btn-xs  bg-primary text-white">
          2
        </a>
        <a href="#item3" className="btn btn-xs  bg-primary text-white">
          3
        </a>
        <a href="#item4" className="btn btn-xs  bg-primary text-white">
          4
        </a>
      </div>
    </div>
  );
}

export default Carousel;
