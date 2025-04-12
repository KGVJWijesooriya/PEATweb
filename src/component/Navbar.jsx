// Navbar.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ activeItem, setActiveItem }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item, path) => {
    setActiveItem(item);
    navigate(path);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="w-full fixed top-0 backdrop-blur-md bg-black/20 z-50">

      <div className="max-w-screen flex items-center justify-between px-4 py-2">
        <img
          src="/assets/images/logo.png"
          className="h-[8vh] pl-[3vw]"
          alt="Logo"
        />
        <nav className="hidden md:flex gap-6 pr-6 ">
          <ul className="flex gap-6 text-white ">
            {navItems.map(({ label, path }) => (
              <li
                key={label}
                className={`cursor-pointer ${
                  location.pathname === path ? "font-bold text-[#fffffffb]" : ""
                } text-[18px]`}
                onClick={() => handleClick(label, path)}
              >
                {label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
