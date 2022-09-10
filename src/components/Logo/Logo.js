import React from "react";
import logo from "../../assets/asmat-logo.jpeg";

const Logo = ({display}) => {
    console.log(display);
  return (
    <div className={`bg-gradient-to-l from-blue-700 to-green-800 lg:${display} flex justify-center items-center space-x-8 `}>
      <div className="w-28 h-28">
        <img src={logo} alt="" className="w-full rounded-b-full shadow-2xl" />
      </div>
      <div className="">
        <h1 className="h1 text-base-100 font-extrabold">hazi asmat government college Bhairab</h1>
      </div>
    </div>
  );
};

export default Logo;
