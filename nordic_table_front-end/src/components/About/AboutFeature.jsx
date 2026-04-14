import React from "react";
import clsx from "clsx";

const statAbout = [
  { id: 1, value: "12", label: "Reter på Menuen" },
  { id: 2, value: "6", label: "Års erfaring" },
  { id: 3, value: "100", label: "% Nordiske Råvarer" },
];

const AboutFeature = () => {
  return (
    <div>
      <FeatureItem />
    </div>
  );
};

const FeatureItem = () => {
  return (
    <>
      <ul className="flex flex-row items-center justify-between py-4 md:py-6">
        {statAbout.map((stat) => (
          <li
            key={stat.id}
            className="flex flex-col items-center justify-center"
          >
            <h4
              className={clsx(
                "font-cormorant font-normal text-5xl md:text-6xl text-tertiary uppercase",
              )}
            >
              {stat.value}
            </h4>
            <p className="font-cormorant font-normal text-xs md:text-lg text-tertiary uppercase text-center">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AboutFeature;
