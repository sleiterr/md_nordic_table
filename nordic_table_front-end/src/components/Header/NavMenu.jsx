import React from "react";
import { jwtDecode } from "jwt-decode";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const NavMenu = ({
  handleLinkClick: closeMenu,
  isLoggedIn,
  onLogout,
  token,
}) => {
  // Get the current location to determine if we are on the home page
  const location = useLocation();
  const role = token ? jwtDecode(token).role : null;

  // Handle click on home link to scroll to top if already on home page
  const handleHomeClick = (e) => {
    closeMenu();

    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-12 ml-4 md:mt-0 md:ml-0">
      <ul className="flex flex-col justify-center items-center gap-6">
        <li>
          <Link
            to="/"
            className={clsx(
              "relativeking-wide cursor-pointer",
              "font-cormorant font-medium text-secondary text-3xl md:text-4xl tracking-wide",
              "hover:text-menu-hover transition-all duration-300",
            )}
            onClick={handleHomeClick}
          >
            Forside
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            smooth={true.toString()}
            duration={800}
            offset={-100}
            className={clsx(
              "relative cursor-pointer",
              "font-cormorant font-medium text-secondary text-3xl md:text-4xl tracking-wide",
              "hover:text-menu-hover transition-all duration-300",
            )}
            onClick={closeMenu}
          >
            Menu
          </Link>
        </li>
        <li className="hidden md:block">
          <Link
            to="/booking"
            smooth={true.toString()}
            duration={800}
            offset={-100}
            className={clsx(
              "relative cursor-pointer",
              "font-cormorant font-medium text-secondary text-3xl md:text-4xl tracking-wide",
              "hover:text-menu-hover transition-all duration-300",
            )}
            onClick={closeMenu}
          >
            Book bord
          </Link>
        </li>
        {isLoggedIn && role === "admin" && (
          <>
            <li>
              <Link
                to="/backoffice"
                smooth={true.toString()}
                duration={800}
                offset={-100}
                className={clsx(
                  "relative cursor-pointer ",
                  "font-cormorant font-medium text-secondary text-3xl md:text-4xl tracking-wide",
                  "hover:text-menu-hover transition-all duration-300",
                )}
                onClick={() => {
                  closeMenu();
                }}
              >
                Dashboard
              </Link>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <li>
            <Link
              to="/login"
              smooth={true.toString()}
              duration={800}
              offset={-100}
              className={clsx(
                "relative cursor-pointer ",
                "font-cormorant font-medium text-secondary text-3xl md:text-4xl tracking-wide",
                "hover:text-menu-hover transition-all duration-300",
              )}
              onClick={closeMenu}
            >
              Login
            </Link>
          </li>
        )}

        {isLoggedIn && (
          <li>
            <Link
              to="/login"
              smooth={true.toString()}
              duration={800}
              offset={-100}
              className={clsx(
                "relative cursor-pointer ",
                "font-cormorant font-medium text-secondary text-3xl md:text-4xl tracking-wide",
                "hover:text-menu-hover transition-all duration-300",
              )}
              onClick={onLogout}
            >
              Logout
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavMenu;
