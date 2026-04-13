import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-[350px] md:max-w-[400px] flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
