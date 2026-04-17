import React from "react";
import clsx from "clsx";
import { Field, ErrorMessage } from "formik";

const Input = ({ label, name, ...rest }) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={name}
          className="font-normal text-base md:text-lg text-label-input uppercase pb-1"
        >
          {label}
        </label>
      )}
      <Field
        id={name}
        name={name}
        {...rest}
        className={clsx(
          "font-normal text-base text-label-input px-3 h-12 md:px-4 md:h-12",
          "bg-white rounded-sm border border-form-border w-full",
          "shadow focus:outline-none transition-shadow duration-300 focus:ring-1 focus:ring-focus-border resize-none",
        )}
      />
      <div className="h-5 mt-0.5">
        <ErrorMessage name={name} component="div" className="text-red-500" />
      </div>
    </div>
  );
};

export default Input;

// This Input component is a reusable form input field that integrates with Formik for form state management and validation. It accepts props such as label, name, and other input attributes, and renders a styled input field along with an optional label and error message display. The component uses clsx for conditional class names to apply consistent styling across different input types.
