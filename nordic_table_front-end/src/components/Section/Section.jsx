import React from "react";

const Section = ({ children, className = "", style = {}, id }) => {
  return (
    <section className="flex items-center justify-center" style={style} id={id}>
      <div
        className={`w-full py-20 md:py-32 px-0 md:px-0 mx-auto md:max-w-7xl ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
