import React from "react";
import clsx from "clsx";

const NotFound = () => {
  return (
    <section
      className={clsx(
        "flex items-center justify-center",
        "h-screen bg-confirmation",
      )}
    >
      <div className="px-4 py-16 mx-auto md:max-w-7xl">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="font-cormorant font-light text-4xl md:text-6xl mb-4">
            404
          </h1>
          <p className="font-light text-lg md:text-2xl mb-6">
            Siden findes ikke
          </p>
          <a
            href="/"
            className="font-light text-lg md:text-xl text-quaternary underline"
          >
            Til forsiden
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
