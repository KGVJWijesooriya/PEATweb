import React, { useState } from "react";

import "../CSS/CustomerApp.css";

const CustomerApp = () => {
  return (
    <div className="area">
      <h1>Book Slot</h1>
      <div className="item-image">
        <div>
          <img
            className="mokup"
            src="../public/assets/images/samsung-galaxy-still(11).png"
          />
        </div>

        <div className="TextArea">
          <h1>Effortless Parking at Your Fingertips</h1>
          <br />
          <h3>
            With the PEAT Booking App, finding and reserving parking has never
            been easier. Explore available parking slots, book instantly, and
            secure your spot all in just a few taps.
          </h3>
          <br />
          <br />
          <h2>Features </h2>
          <ul>
            <li>Real-time parking slot availability</li>
            <li>Instant booking and secure payments </li>
            <li>Easy navigation to parking locations</li>
            <li>Flexible booking options for short or long stays</li>
          </ul>
          <div className="downloadImg">
            <img
              className="playstore"
              src="../public/assets/images/google-play-6647242_1280.png"
            />
            <img
              className="appstore"
              src="../public/assets/images/Download_on_the_App_Store_RGB_blk.svg.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerApp;
