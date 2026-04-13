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
          "bg-btn-bg border border-btn-border",
          "py-4 px-8 md:py-5 md:px-14 cursor-pointer",
          "font-normal text-primary text-base md:text-xl uppercase",
          "transition duration-300 ease-in-out",
          "hover:bg-button-hover-bg",
          className,
        )}
      >
        {children}
      </Link>
    </>
  );
};

export default Button;
