import React from "react";

const FormCard = ({ label, children, className }) => {
  return (
    <div
      className={`rounded-xl bg-white shadow-form-card flex flex-col items-center justify-center w-full h-full ${className}`}
    >
      <p className="font-cormorant text-xl md:text-2xl text-quaternary text-left w-full">
        {label}
      </p>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default FormCard;

// Custom card component to wrap form elements with consistent styling, takes a label for the card header and children for the form content, also accepts additional className for custom styling if needed.
