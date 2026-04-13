import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import clsx from "clsx";
import BurgerMenu from "./Burger";
import NavMenu from "./NavMenu";
import { logos } from "../../assets/logo/index";

const Header = ({ token, onLogout }) => {
  // State to track if the page is scrolled
  const [scrolled, setScrolled] = useState(false);
  // State to track if the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Get the current location to determine if we are on the home page
  const location = useLocation();
  // Determine if we are on the home page
  const isHome = location.pathname === "/";
  // Determine if the user is logged in based on the presence of a token
  const isLoggedIn = Boolean(token);

  // Handle link click to close the menu
  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      // Listen for scroll events to update scrolled state
      const handleScroll = () => setScrolled(window.scrollY > 0);
      // Check initial scroll position on mount
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener on unmount
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(true);
    }
  }, [location.pathname]); // Update scrolled state when location changes

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, [menuOpen]);

  // Log current location and isHome state
  useEffect(() => {}, [location.pathname, isHome]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 w-full z-999",
          "flex justify-between items-center h-24",
          "px-5",
          "bg-transparent",
        )}
      >
        {/* Overlay */}
        <div
          className={clsx(
            "fixed inset-0 backdrop-blur-sm bg-white/10  transition-opacity duration-300 h-full w-full z-666",
            menuOpen ? "opacity-300" : "opacity-0 pointer-events-none",
          )}
          onClick={() => setMenuOpen(false)}
        ></div>
        <div
          className={clsx(
            "fixed top-0 bottom-0 right-0 z-999",
            "w-full h-auto md:w-200 md:h-full",
            "bg-menu-bg",
            "flex flex-col justify-start items-start",
            "transition-all duration-500 ease-in-out",
            {
              "opacity-0 translate-x-full pointer-events-none": !menuOpen,
              "opacity-100 translate-x-0 pointer-events-auto": menuOpen,
            },
          )}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/" className="pl-4 md:pl-6">
            <img
              src={logos.logoBlack}
              alt="logo"
              className="w-35 md:w-40 h-auto"
            />
          </Link>
          <div className="border-b border-menu-border w-full" />
          <nav className="self-center m-auto">
            <NavMenu
              handleLinkClick={handleLinkClick}
              isLoggedIn={isLoggedIn}
              onLogout={onLogout}
              token={token}
            />
          </nav>
        </div>
        <div className="absolute z-1000 right-6 top-1/2 -translate-y-1/2 backdrop-blur-sm">
          <BurgerMenu
            scrolled={scrolled}
            isOpen={menuOpen}
            toggleMenu={() => setMenuOpen((prev) => !prev)}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
