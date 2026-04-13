import React from "react";
import bookBg from "../../assets/header/headerbg.png";
import SectionWrapper from "../../components/Section/SectionWrapper";

const bookText = [
  {
    id: 1,
    caption: "Reservationer",
    title: "Book dit bord",
    text: "Vi glæder os til at modtage dig. Book dit bord nedenfor, og vi sørger for resten.",
    captionClass:
      "relative font-medium text-sm md:text-base text-caption tracking-widest uppercase",
    titleClass: "font-cormorant font-light text-primary text-3xl md:text-7xl",
    textClass:
      "font-light text-primary text-base md:text-xl leading-[24px] md:leading-[32px] max-w-[320px] md:max-w-[445px]",
  },
];

const HeroBooking = () => {
  return (
    <SectionWrapper bgSrc={bookBg}>
      <div className="absolute inset-0 flex items-center justify-start px-7 md:pl-8">
        <BookItem />
      </div>
    </SectionWrapper>
  );
};

export default HeroBooking;

const BookItem = () => {
  return (
    <>
      {bookText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-start justify-center gap-4 md:gap-6"
        >
          <span className={item.captionClass}>{item.caption}</span>
          <h1 className={item.titleClass}>{item.title}</h1>
          <p className={item.textClass}>{item.text}</p>
        </div>
      ))}
    </>
  );
};
