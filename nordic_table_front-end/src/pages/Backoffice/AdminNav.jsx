import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import clsx from "clsx";

const AdminNav = ({ token, onLogout }) => {
  // true if user is authenticated
  const isLoggedIn = Boolean(token);
  // navigation hook from react-router
  const navigate = useNavigate();

  // useEffect to check authentication status on component mount and redirect to login if not authenticated
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  // Handler for logout button click, calls the onLogout prop function to clear authentication state in parent component
  const handleLogout = () => {
    onLogout();
  };
  return (
    <>
      <nav className="px-8 py-6">
        <ul className="flex items-center justify-start gap-4 md:gap-8">
          <li className="relative">
            <Link
              className={clsx(
                "flex items-center font-light tracking-wider text-content text-2xl md:text-xl gap-2",
                "before:content-[''] before:absolute before:w-0 before:h-0.5 before:rounded-xs before:bg-white before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full",
              )}
              to="/"
            >
              Home <BiHomeAlt2 />
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={handleLogout}
              className={clsx(
                "flex items-center gap-2 font-light tracking-wider text-content text-2xl md:text-xl cursor-pointer",
                "after:absolute after:content-[''] hover:after:w-full after:h-0.5 after:bg-white after:rounded-xs after:-bottom-[.25rem] after:left-0 after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-100",
              )}
            >
              Logout <AiOutlineLogout />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AdminNav;

// Admin Nav component with authentication check and logout functionality.
