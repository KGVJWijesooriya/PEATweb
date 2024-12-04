import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import "../CSS/mainBanner.css";
import { FaAnglesRight } from "react-icons/fa6";

const MainBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: "ease-out-cubic", // Easing function
      once: false, // Animation will trigger every time element is in view
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="hero-text"
          data-aos="fade-right" // AOS animation for text
          data-aos-duration="1500" // Custom duration for text animation
        >
          <h1>
            Find Your Parking Spot, <br /> Anytime, Anywhere.
          </h1>
          <button className="book-now-btn">
            Book Now
            <FaAnglesRight className="icon" />
          </button>
        </div>
        <div
          className="hero-image"
          data-aos="fade-left" // AOS animation for image
          data-aos-duration="1500" // Custom duration for image animation
        >
          <img
            src="../public/assets/images/15689.jpg"
            alt="Parking Spot"
          />
        </div>
      </section>
    </div>
  );
};

export default MainBanner;
