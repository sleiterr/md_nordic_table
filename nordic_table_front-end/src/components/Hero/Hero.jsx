import React from "react";
import heroBg from "../../assets/header/headerbg.png";
import Button from "../Button/Button";
import clsx from "clsx";

const heroText = [
  {
    id: 1,
    caption: "velkomst",
    title: "Smag det nordiske",
    text: "Nordic Table er et sted, hvor sæsonens bedste råvarer forvandles til uforglemmelige oplevelser. Ro, kvalitet og hygge i hvert eneste måltid.",
    captionClass:
      "relative font-medium text-sm md:text-base text-caption tracking-widest uppercase pl-12 md:pl-12",
    titleClass: "font-cormorant font-light text-primary text-3xl md:text-7xl",
    textClass:
      "font-light text-primary text-base md:text-xl leading-[24px] md:leading-[32px] max-w-[320px] md:max-w-[445px]",
  },
];

const Hero = () => {
  return (
    <section
      className="relative w-full min-w-[320px] h-screen lg:h-auto bg-cover bg-no-repeat bg-center md:aspect-8/5"
      id="home"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-start px-7 md:pl-8">
        <HeroItem />
      </div>
    </section>
  );
};

export default Hero;

const HeroItem = () => {
  return (
    <>
      {heroText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-start justify-center gap-4 md:gap-6"
        >
          <span className={item.captionClass}>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 before:content-[''] before:block before:h-px before:w-7.5 before:bg-border-caption" />
            {item.caption}
          </span>
          <h1 className={item.titleClass}>{item.title}</h1>
          <p className={item.textClass}>{item.text}</p>
          <div className="flex items-center gap-6 md:gap-12 mt-6 md:mt-8">
            <Button to="/booking">Book Bord</Button>
            <Button
              to="/menu"
              className={clsx(
                "bg-transparent! border-btn-outline!",
                "hover:bg-white/40! hover:backdrop-blur-md hover:border-btn-border!",
              )}
            >
              Se Menu
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};
