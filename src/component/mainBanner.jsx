// components/MainBanner.jsx
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const MainBanner = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <section
      className="relative h-screen w-screen flex justify-center items-center px-[5vw] py-12 md:h-[100vh] text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('/assets/images/background.jpg')`,
      }}
    >
      <div
        className="flex flex-col items-center text-center gap-6 pt-[10vh] pb-[10vh]"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h1 className="text-4xl md:text-[4vw] leading-tight font-bold text-shadow-lg">
          Find Your Parking Spot, <br /> Anytime, Anywhere.
        </h1>
        <button
          className="flex items-center gap-2 bg-[#F8A71B] text-white px-5 py-3 text-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default MainBanner;
