import React from "react";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import clsx from "clsx";

const NavMenu = ({ handleLinkClick, isLoggedIn, onLogout, token }) => {
  const role = token ? jwtDecode(token).role : null;

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
            onClick={handleLinkClick}
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
            onClick={handleLinkClick}
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
            onClick={handleLinkClick}
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
                  handleLinkClick();
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
              onClick={handleLinkClick}
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
