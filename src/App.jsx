import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import "./fonts.css";
import MainBanner from "./component/mainBanner.jsx";
import CustomerApp from "./component/customerApp.jsx";
import ParkOwner from "./component/parkOwner.jsx";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home"); // Track active menu item

  // Create refs for sections
  const mainBannerRef = useRef(null);
  const customerAppRef = useRef(null);
  const parkOwnerRef = useRef(null);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll to a section and update the active menu item
  const scrollToSection = (ref, item) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveItem(item); // Update active menu item
  };

  // Check which section is currently in view
  const handleScroll = () => {
    const sections = [
      { id: "Home", ref: mainBannerRef },
      { id: "Book Slots", ref: customerAppRef },
      { id: "List Park", ref: parkOwnerRef },
    ];

    let currentActive = activeItem;

    sections.forEach((section) => {
      if (section.ref.current) {
        const rect = section.ref.current.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentActive = section.id; // Update active item if section is in view
        }
      }
    });

    setActiveItem(currentActive); // Update active item based on scroll position
  };

  // Add scroll event listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <li
              className={activeItem === "Home" ? "active" : ""}
              onClick={() => scrollToSection(mainBannerRef, "Home")}
            >
              Home
            </li>
            <li
              className={activeItem === "Book Slots" ? "active" : ""}
              onClick={() => scrollToSection(customerAppRef, "Book Slots")}
            >
              Book Slots
            </li>
            <li
              className={activeItem === "List Park" ? "active" : ""}
              onClick={() => scrollToSection(parkOwnerRef, "List Park")}
            >
              List Park
            </li>
            <li
              className={activeItem === "Contact Us" ? "active" : ""}
              onClick={() => {
                setActiveItem("Contact Us");
                window.location.href = "/contact-us";
              }}
            >
              Contact Us
            </li>
          </ul>
        </nav>
      </header>

      {/* Sections */}
      <div ref={mainBannerRef}>
        <MainBanner />
      </div>
      <div ref={customerAppRef}>
        <CustomerApp />
      </div>
      <div ref={parkOwnerRef}>
        <ParkOwner />
      </div>
    </div>
  );
};

export default App;
