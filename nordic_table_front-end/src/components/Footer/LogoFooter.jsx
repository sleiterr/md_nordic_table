import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logos } from "../../assets/logo/index";
import { LinkWrapper } from "./LinkWrapper";

const LogoFooter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-start justify-center gap-4 md:gap-6 mb-10 md:mb-0">
      <img
        src={logos.logoWhite}
        alt="logo"
        onClick={handleClick}
        className="w-40 h-full cursor-pointer"
      />
      <p className="font-normal text-xs md:text-base text-secondary-footer max-w-48.75 md:max-w-60 text-start">
        Nordisk køkken med fokus pa sæsonens råvarer, enkelhed og hygge.
        Velkommen til bordet.
      </p>
      <LinkWrapper />
    </div>
  );
};

export default LogoFooter;
