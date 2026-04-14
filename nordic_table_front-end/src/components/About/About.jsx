import React from "react";
import restaurant from "../../assets/about/restaurant.png";
import Section from "../Section/Section";
import AboutFeature from "./AboutFeature";
import clsx from "clsx";

const aboutText = [
  {
    id: 1,
    caption: "om os",
    title: "En restaurant båret af nærhed og nærvær",
    text: "Nordic Table er grundlagt med en klar overbevisning: god mad behøver ikke at være kompliceret. Vi laver mad af det, naturen giver os - det nordiske køkkens uforlignelige råvarer.",
    subtext:
      "Fra de friske fiskefarvande til skovens bær og urter - vores menu forandrer sig med årstidens rytme. Det giver gæsterne noget nyt at opdage, og det giver os glæden ved at lave mad med det bedste, vi kan få fat i.",
    captionClass:
      "font-medium text-sm md:text-base text-caption tracking-widest uppercase pb-4 md:pb-6",
    titleClass:
      "font-cormorant font-light text-quaternary text-3xl md:text-5xl max-w-[320px] md:max-w-[460px]",
    textClass:
      "font-light text-about text-base md:text-xl leading-[24px] md:leading-[32px] max-w-[320px] md:max-w-[560px]",
  },
];

const About = () => {
  return (
    <Section
      className={clsx(
        "grid grid-cols-1 md:grid-cols-2",
        "items-center justify-center gap-8 md:gap-12 px-4!",
      )}
    >
      <div className="flex items-center justify-center">
        <img
          src={restaurant}
          alt="Restaurant"
          className="w-86.25 h-auto md:w-150 object-cover"
        />
      </div>
      <div className="">
        <AboutItem />
        <div className="border-t border-border-caption">
          <AboutFeature />
        </div>
      </div>
    </Section>
  );
};

const AboutItem = () => {
  return (
    <>
      {aboutText.map((item) => (
        <div
          key={item.id}
          className={clsx(
            "flex flex-col items-start md:items-start justify-center mb-4 md:mb-6",
          )}
        >
          <span className={item.captionClass}>{item.caption}</span>
          <h2 className={item.titleClass}>{item.title}</h2>
          <span className="mt-4 md:mt-6 before:content-[''] before:block before:h-px before:w-12 before:bg-border-caption" />
          <div className="flex flex-col items-start justify-center mt-4 gap-4">
            <p className={item.textClass}>{item.text}</p>
            <p className={item.textClass}>{item.subtext}</p>
          </div>
          {/* <span className="mt-7 md:mt-8 before:content-[''] before:block before:h-px before:w-full before:bg-border-caption w-full" /> */}
        </div>
      ))}
    </>
  );
};

export default About;
