import React from "react";
import logo from "../../assets/asmat-logo.jpeg";

const Logo = ({display}) => {
    console.log(display);
  return (
    <div className={`bg-gradient-to-l from-primary to-secondary lg:${display} flex justify-center items-center space-x-8 `}>
      <div className="w-28 h-28">
        <img src={logo} alt="" className="w-full rounded-b-full shadow-2xl" />
      </div>
      <div className="text-base-100 uppercase text-center">
        <h1 className="h3 font-extrabold ">hazi asmat government college</h1>
        <p>Bhairab, Kishoreganj</p>
      </div>
    </div>
  );
};

export default Logo;
