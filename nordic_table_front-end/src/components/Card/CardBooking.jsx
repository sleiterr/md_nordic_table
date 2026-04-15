import React from "react";

const CardBooking = ({ children, className }) => {
  return (
    <div
      className={`bg-card-booking w-full max-w-full md:max-w-100 md:min-h-47.5 h-auto rounded-[10px] border-l-[3px] border-l-icon flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};

export default CardBooking;
