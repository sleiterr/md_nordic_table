import React from "react";
import AuthHero from "./AuthHero";
import AuthLandingPage from "./AuthLandingPage";

const LoginLayout = ({ onLogin }) => {
  return (
    <>
      <AuthHero />
      <AuthLandingPage onLogin={onLogin} />
    </>
  );
};

export default LoginLayout;
