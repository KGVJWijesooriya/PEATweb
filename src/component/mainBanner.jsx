import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const MainBanner = ({ scrollToSection, activeItem, refs }) => {
  const { mainBannerRef, customerAppRef, parkOwnerRef } = refs;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative flex justify-center items-center px-[5vw] py-12 md:h-[100vh] text-white bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('/assets/images/background.jpg')`,
        }}
      >
        {/* Menu only visible within the Main Banner */}
        <header className="absolute top-0 w-full bg-transparent z-50 ">
          <div className="flex items-center justify-between px-4 py-2">
            <img
              src="/assets/images/logo.png"
              className="h-[8vh] pl-[3vw]"
              alt="Logo"
            />
            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-6">
              <ul className="flex gap-6 text-white">
                {["Home", "Book Slots", "List Park", "Contact Us"].map(
                  (item) => (
                    <li
                      key={item}
                      className={`cursor-pointer ${
                        activeItem === item ? "font-bold text-[#F8A71B]" : ""
                      } text-[18px]`}
                      onClick={() => {
                        if (item === "Contact Us") {
                          window.location.href = "/contact-us";
                        } else {
                          const ref =
                            item === "Home"
                              ? mainBannerRef
                              : item === "Book Slots"
                              ? customerAppRef
                              : parkOwnerRef;
                          scrollToSection(ref, item);
                        }
                      }}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden" onClick={toggleMenu}>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </div>

          {menuOpen && (
            <div
              className="fixed top-0 left-0 w-2/3 h-full bg-black bg-opacity-70 shadow-lg z-50 flex flex-col p-4 md:hidden backdrop-blur-md"
              data-aos="fade-right"
            >
              <button className="self-end mb-4 text-xl" onClick={toggleMenu}>
                &times;
              </button>
              <ul className="flex flex-col gap-4 text-white">
                {["Home", "Book Slots", "List Park", "Contact Us"].map(
                  (item) => (
                    <li
                      key={item}
                      className={`cursor-pointer ${
                        activeItem === item ? "font-bold text-[#F8A71B]" : ""
                      }`}
                      onClick={() => {
                        if (item === "Contact Us") {
                          window.location.href = "/contact-us";
                        } else {
                          const ref =
                            item === "Home"
                              ? mainBannerRef
                              : item === "Book Slots"
                              ? customerAppRef
                              : parkOwnerRef;
                          scrollToSection(ref, item);
                          toggleMenu();
                        }
                      }}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </header>

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
    </div>
  );
};

export default MainBanner;
