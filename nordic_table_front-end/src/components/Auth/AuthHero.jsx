import React from "react";
import SectionWrapper from "../Section/SectionWrapper";
import loginBg from "../../assets/header/headerbg.png";


const authText = [
  {
    id: 1,
    title: "Login",
    titleClass:
      "font-cormorant font-bold text-primary text-4xl md:text-6xl tracking-[1.2px] md:tracking-[1.4px] uppercase",
  },
];

const AuthHero = () => {
  return (
    <SectionWrapper bgSrc={loginBg}>
      <div className="absolute inset-0 flex items-center justify-center">
        <AuthItem />
      </div>
    </SectionWrapper>
  );
};

export default AuthHero;

const AuthItem = () => {
  return (
    <div>
      {authText.map((item) => (
        <div key={item.id} className="text-center">
          <h2 className={item.titleClass}>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};
