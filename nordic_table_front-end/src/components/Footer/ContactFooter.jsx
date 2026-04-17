import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const contactData = [
  {
    id: 1,
    icon: <FaLocationDot />,
    text: "Nordgade 12, 9000 Aalborg",
    iconClass: "text-base md:text-xl text-footer-icon",
    textClass:
      "font-light text-sm md:text-base text-secondary-footer tracking-wide",
  },
  {
    id: 2,
    icon: <FaPhone />,
    href: "tel:+45 12 34 56 78",
    text: "+45 12 34 56 78",
    iconClass: "text-base md:text-xl text-footer-icon",
    textClass:
      "font-light text-sm md:text-base text-secondary-footer tracking-wide",
  },
  {
    id: 3,
    icon: <MdEmail />,
    href: "mailto:info@nordictable.dk",
    text: "info@nordictable.dk",
    iconClass: "text-base md:text-xl text-footer-icon",
    textClass:
      "font-light text-sm md:text-base text-secondary-footer tracking-wide",
  },
];

export const ContactFooter = () => {
  return (
    <div className="flex flex-col md:items-end gap-4">
      <h4 className="font-extrabold text-base md:text-xl text-primary-footer tracking-wider">
        Kontakt os
      </h4>
      <ul className="flex flex-col items-start md:items-end justify-center gap-2 lg:gap-6">
        {contactData.map((item) => (
          <li key={item.id} className="flex items-center gap-2">
            <span className={item.iconClass}>{item.icon}</span>
            <a href={item.href} className={item.textClass}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Contact Footer component that displays contact information with icons and styling for the footer section of the website. It uses React Icons for visual representation and Tailwind CSS for styling. The contact information includes the address, phone number, and email, each with corresponding icons and links where applicable.
