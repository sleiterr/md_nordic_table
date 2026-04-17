import React from "react";
import clsx from "clsx";

const DeleteBtn = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={clsx(
        "bg-red-500 text-white px-3 py-1 rounded disabled:opacity-50 cursor-pointer",
        "transition duration-300 ease-in-out",
        "hover:bg-red-600",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default DeleteBtn;

// DeleteBtn component that renders a styled button for confirming or canceling dish deletion, with customizable styles through the className prop and disabled state handling.
