import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import InputField from "./InputField";
import TextareaField from "./TextareaEditor";
import ImgEdit from "./ImgEdit";

// Access API URL from environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL;

// Component for creating a new dish post
const DishFormEditor = () => {
  // current form values and a key to force re-mounting the form for resetting after submission
  const initialValues = {
    title: "",
    author: "",
    teaser: "",
    content: "",
    image: null,
  };
  // State to force re-mounting the form to reset file input after submission
  const [formKey, setFormKey] = React.useState(0);

  // Validation schema for the form fields
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    teaser: Yup.string().required("Teaser is required"),
    content: Yup.string().required("Content is required"),
    // image: Yup.mixed(), // optional
  });

  // Function to handle form submission call formik's
  const handleSubmit = async (values, { resetForm }) => {
    // use try from async/await syntax for cleaner code and error handling when submitting the form data to the API
    try {
      // new FormData object to hold the form data, append each field to the FormData object, including the image file if it exists, using the append method which takes the field name and value as arguments
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("author", values.author);
      formData.append("teaser", values.teaser);
      formData.append("content", values.content);
      // if an image file is selected, append it to the FormData object with the key "image"
      if (values.image) formData.append("image", values.image);
      // Send POST request to API to create a new dish with the form data, await the response and parse it as JSON
      const res = await fetch(`${API_URL}/dish`, {
        method: "POST",
        body: formData,
      });
      // response data from the API after attempting to create a new dish.
      const data = await res.json();

      if (res.ok) {
        toast.success("Dish created successfully!");
        resetForm();
        setFormKey((k) => k + 1); // Force re-mount to reset file input
      } else {
        toast.error(data.message || "Failed to create dish");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <Formik
      key={formKey}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ values, setFieldValue }) => (
        <Form className="flex flex-col justify-center w-full max-w-2xl mx-auto  rounded shadow px-8 py-6 bg-gray-100">
          <p className="p-5 text-xl text-gray-900 font-medium">Add dish</p>
          <div className="mb-8 self-start">
            {/* use createObjectURL for previewing the selected image before uploading */}
            <ImgEdit
              id="add-image"
              src={values.image ? URL.createObjectURL(values.image) : ""}
              onChange={(e) => setFieldValue("image", e.target.files[0])}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <InputField
              name="title"
              value={values.title}
              onChange={(e) => setFieldValue("title", e.target.value)}
              placeholder="Enter Title"
            />
            <InputField
              name="author"
              value={values.author}
              onChange={(e) => setFieldValue("author", e.target.value)}
              placeholder="Enter Author"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <TextareaField
              name="teaser"
              value={values.teaser}
              onChange={(e) => setFieldValue("teaser", e.target.value)}
              placeholder="Enter Teaser"
              rows={6}
            />
            <TextareaField
              name="content"
              value={values.content}
              onChange={(e) => setFieldValue("content", e.target.value)}
              placeholder="Enter Content"
              rows={6}
            />
          </div>
          <Button type="submit">Add Dish</Button>
        </Form>
      )}
    </Formik>
  );
};

const Button = ({ children, type = "button", ...rest }) => {
  return (
    <button
      type={type}
      {...rest}
      className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition w-full cursor-pointer"
    >
      {children}
    </button>
  );
};

export default DishFormEditor;
