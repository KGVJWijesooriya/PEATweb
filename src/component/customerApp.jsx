import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import "../CSS/CustomerApp.css";
import {
  MdOutlineEventAvailable,
  MdOutlinePayment,
  MdOutlineNavigation,
  MdOutlineDateRange,
} from "react-icons/md"; // Importing icons

const CustomerApp = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: "ease-out-cubic", // Easing function
      once: false, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="area">
      <h1 data-aos="fade-up">Book a Slot</h1>
      <div className="item-image">
        {/* Image with fade-up animation */}
        <div
          className="mokup-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            className="mokup"
            src="../public/assets/images/samsung-galaxy-still(11).png"
            alt="Mockup"
          />
        </div>

        {/* Text with staggered animations */}
        <div className="TextArea" data-aos="fade-up" data-aos-delay="400">
          <h1>Effortless Parking at Your Fingertips</h1>
          <h3>
            With the PEAT Booking App, finding and reserving parking has never
            been easier. Explore available parking slots, book instantly, and
            secure your spot all in just a few taps.
          </h3>
          <br />
          <h2>Features</h2>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li data-aos="fade-up" data-aos-delay="500">
              <MdOutlineEventAvailable style={{ marginRight: "10px"}} />
              Real-time parking slot availability
            </li>
            <li data-aos="fade-up" data-aos-delay="600">
              <MdOutlinePayment style={{ marginRight: "10px" }} />
              Instant booking and secure payments
            </li>
            <li data-aos="fade-up" data-aos-delay="700">
              <MdOutlineNavigation style={{ marginRight: "10px" }} />
              Easy navigation to parking locations
            </li>
            <li data-aos="fade-up" data-aos-delay="800">
              <MdOutlineDateRange style={{ marginRight: "10px" }} />
              Flexible booking options for short or long stays
            </li>
          </ul>
          <div className="downloadImg">
            <img
              className="playstore"
              src="../public/assets/images/google-play-6647242_1280.png"
              alt="Play Store"
               data-aos="fade-up" data-aos-delay="900"
            />
            <img
              className="appstore"
              src="../public/assets/images/Download_on_the_App_Store_RGB_blk.svg.png"
              alt="App Store"
               data-aos="fade-up" data-aos-delay="1100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerApp;
