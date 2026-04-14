import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

const links = [
  { name: "Book bord", path: "/booking" },
  { name: "Personale", path: "/login" },
];

const FooterLinks = () => {
  return (
    <div className="flex flex-col items-start md:items-center justify-center mb-9 md:mb-0">
      <h4 className="font-extrabold text-base md:text-xl text-primary-footer tracking-wider pb-4">
        Hurtige Links
      </h4>
      <ul className="flex flex-col items-center justify-center gap-4 md:gap-4">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={clsx(
                "font-light text-sm md:text-base text-secondary-footer tracking-wide",
                "transition-colors duration-200 hover:text-secondary-footer-hover",
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
