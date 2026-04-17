import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-87.5 md:max-w-100 flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
