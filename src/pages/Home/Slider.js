import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={4000} showThumbs={false}>
            <div>
                <img src="https://demo.web3canvas.com/themeforest/unisco/images/slider-3.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="http://kodeforest.net/html/uoe/extra-images/slider2.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="http://kodeforest.net/html/uoe/extra-images/slider2.jpg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Slider;