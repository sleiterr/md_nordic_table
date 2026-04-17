import React from "react";

const Section = ({ children, className = "", style = {}, id }) => {
  return (
    <section className="flex items-center justify-center" style={style} id={id}>
      <div
        className={`w-full py-20 md:py-32 px-4 md:px-0 mx-auto md:max-w-7xl ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;

// Custom Section component that serves as a wrapper for different sections of the website. It accepts children elements, custom class names, inline styles, and an optional id for navigation. The component uses Tailwind CSS classes to ensure consistent spacing and responsive design across different screen sizes. It centers its content both vertically and horizontally, making it a versatile container for various types of content throughout the site.
