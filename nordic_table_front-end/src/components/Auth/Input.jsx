import React from "react";
import clsx from "clsx";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={name}
          className="font-normal text-base md:text-lg text-label-input uppercase"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        {...rest}
        className={clsx(
          "font-normal text-base text-label-input px-3 h-12 md:px-4 md:h-12",
          "bg-white rounded-sm border border-form-border",
          "shadow focus:outline-none transition-shadow duration-300 focus:ring-1 focus:ring-focus-border resize-none",
        )}
      />
      <div className="h-5 mt-0.5">
        {error && <p className="text-red-500 text-xs">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
