import React from "react";
import { Field, ErrorMessage } from "formik"; // Importing Field and ErrorMessage components from Formik for form handling and validation error display

const InputField = ({ label, name, ...rest }) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={name} className="mb-1 text-base text-gray-900 ">
          {label}
        </label>
      )}
      <Field
        id={name}
        name={name}
        {...rest}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-600 bg-white"
      />
      <div className="min-h-8 mt-1">
        <ErrorMessage name={name} component="div" className="text-red-400" />
      </div>
    </div>
  );
};

export default InputField;

// InputField component is a reusable form input component that integrates with Formik for form state management and validation, providing a consistent styling and error handling for text inputs across the application.
