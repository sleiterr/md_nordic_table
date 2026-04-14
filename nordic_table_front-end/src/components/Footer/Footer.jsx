import React from "react";
import { ContactFooter } from "./ContactFooter";
import clsx from "clsx";
import LogoFooter from "./LogoFooter";
import OpeningHours from "./OpeningHours";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    //  border-t border-white
    <footer className="flex flex-col items-center justify-center bg-footer">
      <div
        className={clsx(
          "md:flex-row md:items-start md:gap-0 md:py-8",
          "flex items-start flex-col justify-between w-full py-6 px-8  md:py-14 md:px-8",
        )}
      >
        <LogoFooter />
        <OpeningHours />
        <FooterLinks />
        <ContactFooter />
      </div>
      <div
        className={clsx(
          "relative grid place-items-center py-4 md:py-2 md:w-1/3 px-8 md:px-0 w-full",
          "before:content-[''] before:absolute before:top-1 before:w-[90%] md:before:w-full before:h-px before:bg-zinc-600 before:-translate-y-1/2",
        )}
      >
        <p className="flex items-center gap-4 font-light text-xs text-secondary-footer tracking-wider text-center py-2 md:py-4">
          &copy; 2026 Nordic Table. Alle rettigheder forbeholdes
        </p>
      </div>
    </footer>
  );
};

export default Footer;
