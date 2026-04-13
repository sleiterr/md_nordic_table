import React from "react";

// button mt-5
const heroText = [
  {
    id: 1,
    subject: "cinestar studio",
    title: "Film & Tv",
    caption: "Produktion",
    desc: "Vi skaber levende fortællinge, der fanger dit publikum. Fra idé til færdigt produkt leverer vi profesionelle film- og tv- løsninger, der gør din historie uforglemmelig.",
    subjectClass:
      "font-semibold font-teko text-secondary text-2xl md:text-4xl uppercase mb-2 md:mb-4",
    titleClass:
      "flex flex-col md:flex-row items-center font-bold font-cormorant text-secondary text-4xl md:text-7xl uppercase mb-4 md:mb-6",
    captionClass: "font-cormorant text-primary pl-4",
    descClass:
      "font-normal text-secondary text-sm md:text-xl text-center max-w-[270px] md:max-w-[420px]",
  },
];

const Hero = () => {
  return (
    <section
      className="relative w-full min-w-[320px] h-screen lg:h-auto bg-cover bg-no-repeat bg-center md:aspect-8/5"
      id="home"
      style={{
        // backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 bg-hero-overlay"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <HeroItem />
        </div>
      </div>
      <div className="hero-fog"></div>
    </section>
  );
};

export default Hero;

const HeroItem = () => {
  return (
    <div>
      {heroText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center"
        >
          {item.element}
          <h2 className={item.subjectClass}>{item.subject}</h2>
          <h1 className={item.titleClass}>
            <span>{item.title}</span>
            <span className={item.captionClass}>{item.caption}</span>
          </h1>
          <p className={item.descClass}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};
