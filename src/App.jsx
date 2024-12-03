import React, { useState } from "react";
import "./App.css";
import "./fonts.css";
import MainBanner from "./component/mainBanner.jsx";
import CustomerApp from "./component/customerApp.jsx";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Header */}
      <header>
        <div>
          <img
            src={`../public/assets/images/logo.png`}
            className="nav-logo"
            alt="Logo"
          />
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
        </div>
        <nav>
          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li>Home</li>
            <li>Book Slot</li>
            <li>List Park</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
      <div><MainBanner></MainBanner></div>
      <div><CustomerApp></CustomerApp></div>
    </div>
  );
};

export default App;
