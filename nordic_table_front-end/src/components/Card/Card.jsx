import React from "react";

const Card = ({ children }) => {
  return (
    <div className="max-w-100 md:max-w-115 w-full border border-card-border">
      {children}
    </div>
  );
};

export default Card;
