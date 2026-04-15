import React from "react";
import Section from "../../components/Section/Section";
import { useMenu } from "./useMenu";
import clsx from "clsx";

// Define the categories and their corresponding titles
const categoryDishes = ["starter", "main", "dessert"];

// object to map category keys to display titles
const categoryTitles = {
  starter: { title: "Forretter", image: "./category/forretter.png" },
  main: { title: "Hovedretter", image: "./category/hovedretter.png" },
  dessert: { title: "Desserter", image: "./category/desserts.png" },
};

const MenuInfo = () => {
  // Fetch dishes using the custom hook
  const { dishes, loading, error } = useMenu();

  if (loading)
    return (
      <p className="font-normal text-2xl text-tertiary">Loading dishes...</p>
    );

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  // Group dishes by category for attribute access in the rendering
  const grouped = categoryDishes.reduce((acc, cat) => {
    acc[cat] = dishes.filter((i) => i.category === cat);
    // return the accumulator for the next iteration
    return acc;
  }, {});

  return (
    <Section>
      <div className="flex flex-col items-center justify-center w-full gap-9 md:gap-12">
        {categoryDishes.map((cat) => (
          <div
            className="flex flex-col items-start w-full max-w-105 md:max-w-145"
            key={cat}
          >
            <div className={clsx("flex items-center gap-4 mb-6")}>
              <img
                src={categoryTitles[cat].image}
                alt={categoryTitles[cat].title}
                className="w-22.5 h-auto md:w-40 md:h-auto object-cover"
              />
              <h2 className="font-cormorant text-quaternary text-xl md:text-3xl">
                {categoryTitles[cat].title}
              </h2>
            </div>
            <ul className="border-t-2 border-border-caption">
              {grouped[cat].map((item) => (
                <li
                  key={item._id}
                  className="pt-5 pb-4 md:pt-8 md:pb-6 border-b border-border-caption"
                >
                  <div className="pb-1">
                    <h4 className="font-cormorant text-quaternary text-xl md:text-3xl">
                      {item.title}
                    </h4>
                  </div>
                  <div className="flex items-end justify-between">
                    <p className="font-cormorant text-secondary text-base md:text-lg w-85 md:w-130">
                      {item.description}
                    </p>
                    <span className="font-cormorant text-secondary text-base md:text-lg">
                      {item.price} kr.
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default MenuInfo;
