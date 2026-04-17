import React from "react";

// Array of objects representing the opening hours for each day of the week, with properties for the day, time, and CSS classes for styling the text.
const hoursData = [
  {
    id: 1,
    day: "Mandag",
    time: "Lukket",
    dayClass:
      "font-light text-sm md:text-base text-secondary-footer tracking-wide",
    timeClass:
      "font-light text-sm md:text-base text-secondary-footer tracking-wide",
  },
  {
    id: 2,
    day: "Tirsdag-torsdag",
    time: "17-22",
    dayClass:
      "font-light text-sm md:text-base text-secondary-footer tracking-wide",
    timeClass:
      "font-light text-sm md:text-base text-secondary-footer tracking-wide",
  },
  {
    id: 3,
    day: "Fredag-lørdag",
    time: "17-23",
    dayClass:
      "font-light text-sm md:text-base text-secondary-footer tracking-wide",
    timeClass:
      "font-light text-sm md:text-base text-secondary-footer tracking-wide",
  },
  {
    id: 4,
    day: "Søndag",
    time: "12-20",
    dayClass:
      "font-light text-sm md:text-base text-secondary-footer tracking-wide",
    timeClass:
      "font-light text-sm md:text-base text-secondary-footer tracking-wide",
  },
];

const OpeningHours = () => {
  return (
    <div className="flex flex-col items-start gap-4 mb-9 md:mb-0">
      <h4 className="font-extrabold text-base md:text-xl text-primary-footer tracking-wider">
        Åbningstider
      </h4>
      <ul className="flex flex-col items-start gap-2 md:gap-4">
        {hoursData.map((item) => (
          <li
            key={item.id}
            className="flex flex-row items-center justify-between gap-2 w-full"
          >
            <p className={item.dayClass}>{item.day}</p>
            <p className={item.timeClass}>{item.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpeningHours;

// Opening hours data structure with day, time, and CSS classes for styling the text. The component maps over this data to render a list of opening hours in the footer.
