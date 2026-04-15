import React from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import CardBooking from "../../components/Card/CardBooking";

const bookingData = [
  {
    id: 1,
    icon: <GiForkKnifeSpoon />,
    title: "Bordstørrelse",
    text: "Vi tager imod selskaber fra 1 til 12 personer. Kontakt os direkte for større selskaber.",
    iconClass: "text-2xl md:text-4xl text-icon",
    titleClass: "font-cormorant font-light text-secondary text-xl md:text-2xl",
    textClass: "font-light text-secondary text-sm md:text-lg",
  },
  {
    id: 2,
    icon: <IoMdTime />,
    title: "Åbningstider",
    text: "Tirsdag-torsdag kl. 17-22. Fredag-lørdag kl. 17-23. Søndag kl. 12-20. Mandag lukket.",
    iconClass: "text-2xl md:text-4xl text-icon",
    titleClass: "font-cormorant font-light text-secondary text-xl md:text-2xl",
    textClass: "font-light text-secondary text-sm md:text-lg",
  },
];
const contacts = [
  {
    id: 1,
    type: "phone",
    href: "tel:+45 12 34 56 78",
    label: "+45 12 34 56 78",
  },
  {
    id: 2,
    type: "email",
    href: "mailto:info@nordictable.dk",
    label: "info@nordictable.dk",
  },
];

const BookingCard = () => {
  // method to find phone and email contacts from the contacts array
  const phone = contacts.find((contact) => contact.type === "phone");
  const email = contacts.find((contact) => contact.type === "email");

  return (
    // card with booking info and contact details
    <div>
      <ul className="flex flex-wrap items-center justify-center gap-6">
        {bookingData.map((item) => (
          <li key={item.id}>
            <CardBooking className="flex flex-row md:flex-col items-start gap-4 px-5 py-4">
              <div className="">
                <span className={item.iconClass}>{item.icon}</span>
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className={item.titleClass}>{item.title}</h4>
                <p className={item.textClass}>{item.text}</p>
              </div>
            </CardBooking>
          </li>
        ))}
        <li>
          {/* contact card with phone and email details */}
          <CardBooking className="flex flex-row md:flex-col items-start gap-4 px-5 py-4">
            <div className="flex flex-col items-start justify-center gap-2">
              <span className="text-xl md:text-3xl text-icon">
                <FaPhoneAlt />
              </span>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <h4 className="font-cormorant font-light text-secondary text-xl md:text-2xl">
                Kontakt
              </h4>
              <p className="font-light text-secondary text-base md:text-lg">
                Ring på <a href={phone.href}>{phone.label}</a> eller skriv til{" "}
                <a href={email.href}>{email.label}</a>
                ved spørgsmål.
              </p>
            </div>
          </CardBooking>
        </li>
      </ul>
    </div>
  );
};

export default BookingCard;
