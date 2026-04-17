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

// This TextareaField component is a reusable form textarea field that integrates with Formik for form state management and validation. It accepts props such as name and other textarea attributes, and renders a styled textarea field along with an optional error message display. The component uses clsx for conditional class names to apply consistent styling across different textarea instances in the application.