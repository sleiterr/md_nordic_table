import { Field, ErrorMessage } from "formik";
import clsx from "clsx";

const TextareaField = ({ label, name, ...rest }) => (
  <div className="flex flex-col w-full">
    <Field
      as="textarea"
      id={name}
      name={name}
      {...rest}
      className="p-3 h-51.75 text-sm rounded resize-none border border-gray-300 shadow focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-600 bg-white"
    />
    <div className="min-h-8 mt-1">
      <ErrorMessage name={name} component="div" className="text-red-400" />
    </div>
  </div>
);

export default TextareaField;
