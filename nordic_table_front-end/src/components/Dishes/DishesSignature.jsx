import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import clsx from "clsx";
import { useDishes } from "./useDishes";

const DishesSignature = () => {
  const { dishes, loading, error } = useDishes();

  // object to map category keys to display titles
  const categoryTitles = {
    starter: "Forretter",
    main: "Hovedretter",
    dessert: "Desserter",
  };

  // Filter signature dishes and limit to 3
  const signatureDishes = dishes.filter((dish) => dish.isSignature);
  // Show only the first 3 signature dishes
  const visibleProducts = signatureDishes.slice(0, 3);

  if (loading)
    return (
      <p className="font-normal text-2xl text-tertiary">Loading dishes...</p>
    );

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center">
      <ul className="flex flex-wrap items-center justify-center gap-8">
        {visibleProducts.map((item) => (
          <li key={item._id}>
            <Card className="relative">
              <div className="absolute top-2 right-2">
                {item.isSignature && (
                  <span className="font-medium bg-bg-signature text-xs text-white tracking-wide uppercase px-2 py-1">
                    Signature
                  </span>
                )}
              </div>
              <div className="w-full aspect-4/3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center px-4 py-6 bg-card-bg">
                <span className="text-base text-tertiary uppercase tracking-widest mb-2">
                  {categoryTitles[item.category]}
                </span>
                {/* <p>{item.category}</p>
                <p>{categoryTitles[item.category]}</p> */}
                <div className="text-left mb-4">
                  <h4 className="font-cormorant font-light text-xl md:text-2xl text-secondary pb-2">
                    {item.title}
                  </h4>
                  <p className="font-light text-base md:text-lg text-secondary">
                    {item.description}
                  </p>
                </div>
                <p className="font-cormorant font-light text-xl md:text-2xl text-secondary">
                  {item.price} kr.
                </p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
      <div className="mt-10 md:mt-12 w-full flex justify-center">
        <Button
          to="/menu"
          className={clsx(
            "font-normal text-secondary! text-base md:text-xl uppercase",
            "bg-transparent! border-btn-dsih-border!",
            "hover:bg-btn-bg/10! hover:text-tertiary! hover:border-tertiary!",
            "inset-ring-btn-dsih-border! focus:ring-btn-dsih-border! focus:ring-1!",
          )}
        >
          Se hele menu
        </Button>
      </div>
    </div>
  );
};

export default DishesSignature;
