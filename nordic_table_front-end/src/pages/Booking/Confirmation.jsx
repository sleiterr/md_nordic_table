import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import clsx from "clsx";

const Confirmation = () => {
  const location = useLocation();
  const { name, date, time } = location.state || {};

  return (
    <section
      className={clsx(
        "flex items-center justify-center",
        "h-screen bg-confirmation",
      )}
    >
      <div className="px-4 py-16 mx-auto md:max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-12">
          <BoxText name={name} date={date} time={time} />
          <Button
            to="/"
            className="self-center py-2 px-16 text-xl md:text-4xl md:py-4 md:px-34 mt-0!"
          >
            Tilbage
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;

const BoxText = ({ name, date, time }) => {
  const confirmText = [
    {
      id: 1,
      text: `Tak for din reservation ${name || "ven !"} `,
      titleClass:
        "font-cormorant font-leght text-quaternary text-2xl md:text-5xl text-center mb-4 mx-auto w-full max-w-[490px]",
    },
    {
      id: 2,
      text: `Dit bord er reserveret den ${date} kl. ${time}. Vi glæder os til at byde dig velkommen.`,
      titleClass:
        "font-normal text-tertiary text-base md:text-2xl text-center mx-auto w-full max-w-[540px]",
    },
  ];
  return (
    <div>
      {confirmText.map((item) => (
        <div key={item.id} className="">
          <p className={item.titleClass}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
