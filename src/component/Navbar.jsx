import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ activeItem, setActiveItem }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (item, path) => {
    setActiveItem(item);
    navigate(path);
    if (menuOpen) setMenuOpen(false); // close mobile menu
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 pr-6">
          <ul className="flex gap-6 text-white">
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

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden pr-4" onClick={toggleMenu}>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-2/3 h-screen bg-black bg-opacity-80 shadow-lg z-50 flex flex-col p-4 md:hidden backdrop-blur-md"
          data-aos="fade-right"
        >
          <button className="self-end mb-4 text-white text-2xl" onClick={toggleMenu}>
            &times;
          </button>
          <ul className="flex flex-col gap-4 text-white">
            {navItems.map(({ label, path }) => (
              <li
                key={label}
                className={`cursor-pointer ${
                  location.pathname === path ? "font-bold text-[#F8A71B]" : ""
                } text-[18px]`}
                onClick={() => handleClick(label, path)}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
