import { Field, ErrorMessage } from "formik";
import clsx from "clsx";

const TextareaField = ({ name, ...rest }) => (
  <div className="flex flex-col w-full">
    <Field
      as="textarea"
      id={name}
      name={name}
      {...rest}
      className={clsx(
        "font-normal text-base text-label-input p-3 h-51.75",
        "bg-white rounded-sm border border-form-border",
        "shadow focus:outline-none transition-shadow duration-300 focus:ring-2 focus:ring-focus-border resize-none",
      )}
    />
    <div className="mt-2">
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  </div>
);

export default TextareaField;
