// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

import MainBanner from "./component/mainBanner.jsx";
import CustomerApp from "./component/customerApp.jsx";
import ParkOwner from "./component/parkOwner.jsx";
import AboutUS from "./component/AboutUS.jsx";
import MainAboutUS from "./component/MainAboutUS.jsx";
import Navbar from "./component/Navbar.jsx";

const App = () => {
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-out" });
  }, []);

  return (
    <Router>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainBanner />
              <CustomerApp />
              <ParkOwner />
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              <MainAboutUS />
              {/* <AboutUS /> */}
            </>
          }
        />
        <Route
          path="/contact-us"
          element={<div className="p-8">Contact Us Page</div>}
        />
      </Routes>
    </Router>
  );
};

export default App;
