import "aos/dist/aos.css";
import AOS from "aos";
import React, { useRef, useEffect } from "react";
import MainBanner from "./component/mainBanner.jsx";
import CustomerApp from "./component/customerApp.jsx";
import ParkOwner from "./component/parkOwner.jsx";
import AboutUS from "./component/AboutUS.jsx";

const App = () => {
  const mainBannerRef = useRef(null);
  const customerAppRef = useRef(null);
  const parkOwnerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-out" }); // Initialize AOS with smooth easing
  }, []);

  return (
    <div>
      <div ref={mainBannerRef}>
        <MainBanner
          scrollToSection={scrollToSection}
          refs={{ mainBannerRef, customerAppRef, parkOwnerRef }}
        />
      </div>
      <div ref={customerAppRef}>
        <CustomerApp />
      </div>
      <div ref={parkOwnerRef}>
        <ParkOwner />
      </div>
      <div>
        <AboutUS />
      </div>
    </div>
  );
};

export default App;
