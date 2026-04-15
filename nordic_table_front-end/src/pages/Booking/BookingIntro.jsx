import React from "react";
import BookingCard from "./BookingCard";
import Section from "../../components/Section/Section";
import BookingForm from "./BookingForm";

const introText = [
  {
    id: 1,
    caption: "Gæstfrihed",
    title: "Velkomst fra højre ben",
    text: "Vi ønsker at give dig og dine gæster den bedst mulige oplevelse. Her er hvad du skal vide inden dit besøg. ",
    captionClass:
      "font-medium text-sm md:text-base text-caption tracking-[0.075em] uppercase pb-4",
    titleClass:
      "font-cormorant font-light text-secondary text-3xl md:text-4xl after:content-[''] after:block after:h-px after:w-16 after:bg-border-caption after:mb-4",
    textClass:
      "font-light text-about text-base md:text-xl text-center leading-[24px] md:leading-[32px] max-w-[420px] md:max-w-[600px] w-full text-left md:text-center",
  },
];

const BookingIntro = () => {
  return (
    <Section>
      <IntroItem />
      <BookingCard />
      <div className="flex items-start justify-center mt-6 md:mt-12">
        <BookingForm />
      </div>
    </Section>
  );
};

export default BookingIntro;

const IntroItem = () => {
  return (
    <div className="mb-12">
      {introText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-start md:items-center justify-center"
        >
          {item.element}
          <span className={item.captionClass}>{item.caption}</span>
          <h2 className={item.titleClass}>{item.title}</h2>
          <p className={item.textClass}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
