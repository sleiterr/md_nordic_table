import React from "react";
import Hero from "../../components/Hero/Hero";
import DishesSection from "../../components/Dishes/DishesSection";
import About from "../../components/About/About";
import ReservationBanner from "../../components/ReservationBanner/ReservationBanner";

const Home = () => {
  return (
    <>
      <Hero />
      <DishesSection />
      <About />
      <ReservationBanner />
    </>
  );
};

export default Home;
