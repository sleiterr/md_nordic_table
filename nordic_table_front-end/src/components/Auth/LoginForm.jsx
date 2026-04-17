import React from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormCard from "../FormCard/FormCard";
import Input from "./Input";

import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

// Access API URL from environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL;

export const LoginForm = ({ onLogin }) => {
  // useNavigate is a hook from react-router-dom that allows us to navigate programmatically
  const navigate = useNavigate();
  // useFormik is a hook from Formik that helps with form state management and validation
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),

      password: Yup.string().required("Password is required"),
    }),

    // onSubmit is called when the form is submitted and valids
    onSubmit: async (values) => {
      try {
        // Make a POST request to the login endpoint with the form values
        const res = await fetch(`${API_URL}/auth/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        // Parse the JSON response from the server
        const data = await res.json();
        // Check if the response is ok, the status is "ok", and the token is valid
        const token = data?.data?.token;
        const isTokenValid = typeof token === "string" && token.length > 0;

        // if statment to handle successful login, show a success toast, call the onLogin callback with the token, decode the token to get the user information, and navigate to the appropriate page based on the user's role
        if (res.ok && data?.status === "ok" && isTokenValid) {
          toast.success("Login was successful");
          onLogin(token);

          const user = jwtDecode(token);

          if (user.role === "admin") navigate("/backoffice");
          else if (user.role === "guest") navigate("#");
        } else {
          toast.error(data?.message || "invalid login");
        }
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong during login");
      }
    },
  });

  return (
    <>
      <FormCard className=" w-120! py-6 px-4">
        <form onSubmit={formik.handleSubmit} className="flex flex-col">
          <Input
            type="email"
            name="email"
            label="Email *"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
          />
          <Input
            type="password"
            name="password"
            label="Password *"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
          />

          <LoginButton type="submit">Login</LoginButton>
        </form>
      </FormCard>
    </>
  );
};

export default LoginForm;

const LoginButton = ({ children, className, ...rest }) => {
  return (
    <>
      <button
        type="submit"
        {...rest}
        className={clsx(
          "bg-btn-bg border shadow-form-btn border-btn-border",
          "py-4 px-8 mt-4 cursor-pointer",
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
