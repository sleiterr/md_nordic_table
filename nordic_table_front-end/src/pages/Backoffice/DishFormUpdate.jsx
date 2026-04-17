import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import InputField from "./InputField";
import TextareaField from "./TextareaEditor";
import ImgUploader from "./ImgUploader";

// Access API URL from environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL;

const DishFormUpdate = ({ dish, onClose, token }) => {
  if (!dish)
    return (
      <p className="font-medium text-xl text-white">Select a dish to edit</p>
    );

  // values for the form fields, using the existing dish data to pre-populate the form when editing an existing dish.
  const initialValues = {
    title: dish.title || "",
    description: dish.description || "",
    price: dish.price || "",
    category: dish.category || "",
    image: null,
  };

  // Validation schema for the form fields using Yup, ensuring that all required fields are filled out before allowing submission of the form.
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.string().required("Price is required"),
    category: Yup.string().required("Category is required"),
  });

  // Function to handle form submission, using async/await syntax for cleaner code and error handling when submitting the form data to the API to update the existing dish.
  const handleSubmit = async (values, { resetForm }) => {
    let updateSuccess = false;
    try {
      // Build FormData with all fields and dish ID
      const formData = new FormData();
      formData.append("id", dish._id);
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("price", Number(values.price));
      formData.append("category", values.category);
      if (values.image) formData.append("image", values.image);

      // Send PUT request to update dish (with token)
      const res = await fetch(`${API_URL}/dish`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`, // token Bearer used for authentication, should be available in the component
        },
        body: formData,
      });
      // response data from the API after attempting to update the dish.
      const data = await res.json();

      // Show success or error toast based on response status
      if (res.ok) {
        toast.success("Dish updated successfully!");
        updateSuccess = true;
      } else {
        toast.error(data.message || "Failed to update dish");
      }
    } catch (err) {
      console.error(err);
      if (!updateSuccess) toast.error("Something went wrong");
    }
    // if statment to reset the from fields to empty values and close the form after a successful update, using the resetForm function provided by Formik to clear the form fields and calling the onClose prop function to close the form.
    if (updateSuccess) {
      resetForm({
        values: {
          title: "",
          description: "",
          price: "",
          category: "",
          image: null,
        },
      });
      // Close form after update
      if (typeof onClose === "function") {
        setTimeout(onClose, 100); // slight delay to allow resetForm to finish
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ values, setFieldValue, resetForm }) => (
        <Form className="flex flex-col justify-center w-full max-w-2xl mx-auto  rounded shadow px-8 py-6 bg-gray-100">
          <p className="p-5 text-xl text-gray-900 font-medium">Edit dish</p>
          <div className="mb-8 self-start">
            {/* Image uploader for editing dish image */}
            <ImgUploader
              key={
                values.image
                  ? values.image.name
                  : values.title +
                    values.description +
                    values.price +
                    values.category
              }
              id="edit-image"
              // src uses createObjectURL for previewing the selected image before uploading, falls back to existing dish image if no new image is selected
              src={
                values.image
                  ? URL.createObjectURL(values.image)
                  : dish.image || ""
              }
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
          </div>
          <div className="flex items-center justify-center gap-6">
            <InputField
              name="price"
              value={values.price}
              onChange={(e) => setFieldValue("price", e.target.value)}
              placeholder="Enter Price"
            />
            <InputField
              name="category"
              value={values.category}
              onChange={(e) => setFieldValue("category", e.target.value)}
              placeholder="Enter Category"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <TextareaField
              name="description"
              value={values.description}
              onChange={(e) => setFieldValue("description", e.target.value)}
              placeholder="Enter Description"
              rows={6}
            />
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <Button type="submit">Update Dish</Button>
            <Button
              type="button"
              onClick={() => {
                onClose();
                resetForm();
              }}
            >
              Anuller
            </Button>
          </div>
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

export default DishFormUpdate;

// DishFormUpdate component allows editing an existing dish, pre-populating the form with the current dish data and handling form submission to update the dish via API call. It also includes image upload functionality and uses Formik for form state management and Yup for validation.
