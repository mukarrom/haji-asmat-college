import React from 'react';
import welcome from '../../assets/welcome.JPG';

function WelcomeImage() {
  return (
    <div>
      <div className="absolute">
        <h1 className="ml-96 mt-20 text-4xl text-white shadow-lg">
          Welcome To Haji Asmat College.
        </h1>
      </div>
      <img className="w-full h-52" src={welcome} alt="" />
    </div>
  );
}

export default WelcomeImage;
