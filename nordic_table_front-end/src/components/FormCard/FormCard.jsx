import React from "react";

const FormCard = ({ label, children, className }) => {
  return (
    <div
      className={`rounded-xl bg-white shadow-form-card flex flex-col items-center justify-center w-full h-full pb-12 ${className}`}
    >
      <p className="py-4 text-xl text-gray-900 font-medium">{label}</p>
      <div>{children}</div>
    </div>
  );
};

export default FormCard;
