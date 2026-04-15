import React from "react";
import menuBg from "../../assets/header/headerbg.png";
import SectionWrapper from "../../components/Section/SectionWrapper";

const menuText = [
  {
    id: 1,
    caption: "Vores menu",
    title: "Smagsoplevelser fra det nordiske køkken",
    text: "Alt på vores menu er tilberedt af sæsonens friskeste råvarer. Vi arbejder tæt med lokale producenter for at sikre den bedste kvalitet.",
    captionClass:
      "relative font-medium text-sm md:text-base text-caption tracking-widest uppercase",
    titleClass:
      "font-cormorant font-light text-primary text-3xl md:text-7xl md:leading-22 max-w-[320px] md:max-w-[600px]",
    textClass:
      "font-light text-primary text-base md:text-xl leading-[24px] md:leading-[32px] max-w-[320px] md:max-w-[520px]",
  },
];

const MenuHero = () => {
  return (
    <SectionWrapper bgSrc={menuBg}>
      <div className="absolute inset-0 flex items-center justify-start px-7 md:pl-8">
        <MenuItem />
      </div>
    </SectionWrapper>
  );
};

export default MenuHero;

const MenuItem = () => {
  return (
    <>
      {menuText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-start justify-center gap-4 md:gap-6"
        >
          <span className={item.captionClass}>{item.caption}</span>
          <h2 className={item.titleClass}>{item.title}</h2>
          <p className={item.textClass}>{item.text}</p>
        </div>
      ))}
    </>
  );
};
