import React from "react";
import "./Maintenance.css";
import maintenanceGif from "./assets/VdgG.gif"; // Update this path to the actual location of your GIF

const Maintenance = () => {
  return (
    <div className="maintenance-container">
      <h1>🚧 Under Maintenance 🚧</h1>
      <p>We are currently performing scheduled maintenance. Please wait...</p>

      {/* Local GIF */}
      <div className="gif-container">
        <img src={maintenanceGif} alt="Maintenance Animation" />
      </div>
    </div>
  );
};

export default Maintenance;
