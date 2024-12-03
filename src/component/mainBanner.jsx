import React from "react";
import "../CSS/mainBanner.css";
import { FaAnglesRight  } from "react-icons/fa6";

const MainBanner = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>
            Find Your Parking Spot, <br /> Anytime, Anywhere.
          </h1>
          <button className="book-now-btn">
            Book Now
            <FaAnglesRight  className="icon" />
          </button>
        </div>
        <div className="hero-image">
          <img src="../public/assets/images/15689.jpg"/>
        </div>
      </section>
    </div>
  );
};

export default MainBanner;
