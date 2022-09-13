import React from "react";

const Card = ({ cardHeading, children}) => {
  return (
    <div>
      <div className="h-96 shadow-xl m-5 bg-base-100 rounded-2xl">
        <div className="bg-primary w-full text-white rounded-tr-2xl rounded-bl-2xl">
          {cardHeading}
        </div>
        <div className="p-3">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
