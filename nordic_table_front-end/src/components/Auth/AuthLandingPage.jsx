import React from "react";
import Section from "../Section/Section";
import LoginForm from "./LoginForm";

const pageText = [
  {
    id: 1,
    subject: "Nordic Table",
    title: "Admin Logind",
    titleClass: "font-cormorant font-light text-secondary text-3xl md:text-7xl",
    subjectClass:
      "font-medium text-sm md:text-base text-caption tracking-widest uppercase",
  },
];

const AuthLandingPage = () => {
  return (
    <Section>
      <AuthItem />
      <div className="flex items-center justify-center">
        <LoginForm />
      </div>
    </Section>
  );
};

const AuthItem = () => {
  return (
    <>
      {pageText.map((item) => (
        <div key={item.id} className="mb-6 md:mb-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className={item.subjectClass}>{item.subject}</h4>
            <h2 className={item.titleClass}>{item.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default AuthLandingPage;
