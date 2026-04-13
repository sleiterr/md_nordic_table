import React from "react";
import DishesCard from "./DishesSignature";
import Section from "../Section/Section";

const dishesText = [
  {
    id: 1,
    caption: "Udvalgte retter",
    title: "Vores signaturretter",
    text: "Hver af vores signaturretter er omhyggeligt sammensat af sæsonens bedste nordiske råvarer.",
    captionClass:
      "font-medium text-sm md:text-base text-caption tracking-[0.075em] uppercase pb-4",
    titleClass:
      "font-cormorant font-light text-quaternary text-3xl md:text-4xl pb-4",
    textClass:
      "font-light text-tertiary text-base md:text-xl text-center leading-[24px] md:leading-[32px] max-w-[420px] md:max-w-[600px] w-full",
  },
];

const DishesSection = () => {
  return (
    <Section>
      <DishesItem />
      <DishesCard />
    </Section>
  );
};

export default DishesSection;

const DishesItem = () => {
  return (
    <div className="mb-16">
      {dishesText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center"
        >
          {item.element}
          <span className={item.captionClass}>{item.caption}</span>
          <h1 className={item.titleClass}>{item.title}</h1>
          <p className={item.textClass}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
