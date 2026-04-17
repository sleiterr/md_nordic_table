import React from "react";

const SectionWrapper = ({
  children,
  className = "",
  style = {},
  id,
  bgSrc,
}) => {
  return (
    <section
      className={`relative min-h-[45vh] w-full min-w-[320px] md:h-screen bg-cover bg-no-repeat bg-center md:aspect-8/5 ${className}`}
      id={id}
      style={{
        backgroundImage: bgSrc ? `url(${bgSrc})` : undefined,
        backgroundPosition: "center center",
        ...style,
      }}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;

// Custom SectionWrapper component that provides a flexible and reusable section layout with optional background image support. It accepts children elements, custom class names, inline styles, an optional ID, and a background image source. The component uses Tailwind CSS classes for styling and ensures that the background image is properly displayed and responsive across different screen sizes.
