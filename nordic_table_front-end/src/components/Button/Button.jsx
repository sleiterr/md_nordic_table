import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const Button = ({ children, to, className, ...rest }) => {
  return (
    <>
      <Link
        to={to}
        {...rest}
        className={clsx(
          "bg-button-bg py-4 px-8 rounded cursor-pointer mt-6",
          "font-normal text-dark-secondary text-4xl",
          "rounded-[6.25rem]",
          "transition duration-300 ease-in-out",
          "hover:bg-button-hover-bg hover:text-white",
          className,
        )}
      >
        {children}
      </Link>
    </>
  );
};

export default Button;
