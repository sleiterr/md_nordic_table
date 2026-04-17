import React from "react";
import Button from "../Button/Button";
import restaurant from "../../assets/reservetion/restaurant.png";
import SectionWrapper from "../Section/SectionWrapper";

const reservationText = [
  {
    id: 1,
    caption: "reservationer",
    title: "Book dit bord hos Nordic Table",
    text: "Vi åbner vores døre for dig og dine, og giver jer en aften I aldrig glemmer. Book dit bord i dag - det er nemt og hurtigt.",
    captionClass:
      "font-medium text-sm md:text-base text-caption tracking-widest uppercase",
    titleClass:
      "font-cormorant font-light text-primary text-3xl md:text-7xl  max-w-[290px] md:max-w-none",
    textClass:
      "font-light text-primary text-base md:text-xl leading-[24px] md:leading-[32px] max-w-[290px] md:max-w-[445px]",
  },
];

const ReservationBanner = () => {
  return (
    <SectionWrapper bgSrc={restaurant}>
      <div className="absolute inset-0 flex items-center justify-center px-7 md:pl-8">
        <BannerItem />
      </div>
    </SectionWrapper>
  );
};

export default ReservationBanner;

const BannerItem = () => {
  return (
    <>
      {reservationText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center gap-4 md:gap-6 text-center"
        >
          <span className={item.captionClass}>{item.caption}</span>
          <h2 className={item.titleClass}>{item.title}</h2>
          <p className={item.textClass}>{item.text}</p>
          <div className="flex items-center justify-center mt-6 md:mt-8">
            <Button to="/booking" className="text-xs! md:text-xl!">
              Book Bord Nu
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

// ReservationBanner.jsx is a React component that displays a reservation banner with a background image of a restaurant. It uses a SectionWrapper component to set the background and contains a BannerItem component that renders the reservation text and a button to book a table. The reservation text is stored in an array of objects, allowing for easy customization and localization. The component is styled using Tailwind CSS classes for responsive design and visual appeal.
