import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import "../CSS/ParkOwner.css";
import {
  MdOutlineEventAvailable,
  MdUpdate,
  MdAnalytics,
  MdPeopleAlt,
} from "react-icons/md"; // Importing icons from react-icons/md

const ParkOwner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: "ease-out-cubic", // Easing function
      once: false, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="areaPO">
      <h1 data-aos="fade-up">List Your Park</h1>
      <div className="item-imagePO">
        <div className="TextAreaPO" data-aos="fade-up" data-aos-delay="400">
          <h1>Maximize Your Parking Revenue with PEAT</h1>
          <h3>
            The PEAT Park Owner App empowers parking facility owners to manage
            bookings, track occupancy, and increase revenue effortlessly. List
            your parking space and let technology handle the rest.
          </h3>
          <br />
          <h2>Features</h2>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li data-aos="fade-up" data-aos-delay="500">
              <MdOutlineEventAvailable style={{ marginRight: "10px" }} />
              Easy setup to list your parking spaces
            </li>
            <li data-aos="fade-up" data-aos-delay="600">
              <MdUpdate style={{ marginRight: "10px" }} />
              Real-time updates on slot availability
            </li>
            <li data-aos="fade-up" data-aos-delay="700">
              <MdAnalytics style={{ marginRight: "10px" }} />
              Detailed analytics and earnings reports
            </li>
            <li data-aos="fade-up" data-aos-delay="800">
              <MdPeopleAlt style={{ marginRight: "10px" }} />
              Hassle-free customer management
            </li>
          </ul>
          <div className="downloadImg">
            <img
              className="playstore"
              src="../public/assets/images/google-play-6647242_1280.png"
              alt="Play Store"
              data-aos="fade-up"
              data-aos-delay="900"
            />
            <img
              className="appstore"
              src="../public/assets/images/Download_on_the_App_Store_RGB_blk.svg.png"
              alt="App Store"
              data-aos="fade-up"
              data-aos-delay="1100"
            />
          </div>
        </div>
        <div
          className="mokup-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            className="mokupPO"
            src="../public/assets/images/samsung-galaxy-still(11).png"
            alt="Mockup"
          />
        </div>
      </div>
    </div>
  );
};

export default ParkOwner;
