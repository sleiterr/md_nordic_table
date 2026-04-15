import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import { toast } from "react-toastify";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import Input from "./Input";
import FormCard from "../../components/FormCard/FormCard";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const BookingForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    numberOfGuests: "",
    date: "",
    time: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Navn er påkrævet"),
    email: Yup.string()
      .email("Ugyldig email")
      .required("Skriv venligst din email"),
    numberOfGuests: Yup.number()
      .required("Antal gæster er påkrævet")
      .min(1, "Der skal være mindst 1 gæst")
      .max(12, "Der kan være maksimalt 12 gæster"),
    date: Yup.date().required("Dato er påkrævet"),
    time: Yup.string().required("Tidspunkt er påkrævet"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Map message to description for backend
      const payload = {
        name: values.name,
        email: values.email,
        numberOfGuests: values.numberOfGuests,
        startAt: `${values.date}T${values.time}`,
      };

      const res = await fetch(`${API_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        // toast.success(`Tak ${values.name}, din besked er sendt!`);
        resetForm();
        navigate("/confirmation", {
          state: {
            name: values.name,
            date: values.date,
            time: values.time,
          },
        });
      }
    } catch (err) {
      console.error(err);
      console.error("Noget gik galt, prøv igen");
    }
  };
  return (
    <FormCard label="Din reservation" className=" w-120! py-6 px-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="w-full">
            <div className="flex flex-col">
              <Input
                type="text"
                name="name"
                label="Fullt navn *"
                placeholder="Jens Jensen"
                value={values.name}
                onChange={(e) => setFieldValue("name", e.target.value)}
              />
              <Input
                type="email"
                name="email"
                label="Email *"
                placeholder="jens@example.dk"
                value={values.email}
                onChange={(e) => setFieldValue("email", e.target.value)}
              />
              <div className="flex items-center gap-4">
                <Input
                  type="date"
                  name="date"
                  label="Start dato *"
                  placeholder="Vælg startdato"
                  value={values.date}
                  onChange={(e) => setFieldValue("date", e.target.value)}
                />
                <Input
                  type="time"
                  name="time"
                  label="Vælg tidspunkt"
                  value={values.time}
                  onChange={(e) => setFieldValue("time", e.target.value)}
                />
              </div>
              <Input
                type="number"
                name="numberOfGuests"
                label="Antal Gæster *"
                placeholder="Vælg antal gæster"
                value={values.numberOfGuests}
                onChange={(e) =>
                  setFieldValue("numberOfGuests", e.target.value)
                }
              />
            </div>
            <SendButton type="submit">Book Bord</SendButton>
          </Form>
        )}
      </Formik>
    </FormCard>
  );
};

export default BookingForm;

const SendButton = ({ children, className, ...rest }) => {
  return (
    <>
      <button
        type="submit"
        {...rest}
        className={clsx(
          "bg-btn-bg border shadow-form-btn border-btn-border",
          "py-4 px-8 mt-4 w-full cursor-pointer",
          "font-normal text-primary text-base md:text-xl uppercase",
          "transition duration-300 ease-in-out",
          "hover:bg-button-hover-bg",
          className,
        )}
      >
        {children}
      </button>
    </>
  );
};
