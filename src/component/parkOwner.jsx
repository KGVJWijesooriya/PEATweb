import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
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
    <div className="bg-white px-6 py-12 h-[100vh] flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl text-center font-bold mb-12" data-aos="fade-up">
          List Your Park
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          {/* Text Section */}
          <div
            className="lg:w-1/2 px-4 mb-8 lg:mb-0 order-2 lg:order-1"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h1 className="text-3xl font-bold mb-4">
              Maximize Your Parking Revenue with PEAT
            </h1>
            <h3 className="text-lg text-gray-600 mb-6">
              The PEAT Park Owner App empowers parking facility owners to manage
              bookings, track occupancy, and increase revenue effortlessly. List
              your parking space and let technology handle the rest.
            </h3>
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="space-y-4">
              <li
                className="flex items-center text-gray-700"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <MdOutlineEventAvailable className="mr-3 text-2xl" /> Easy setup
                to list your parking spaces
              </li>
              <li
                className="flex items-center text-gray-700"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <MdUpdate className="mr-3 text-2xl" /> Real-time updates on slot
                availability
              </li>
              <li
                className="flex items-center text-gray-700"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <MdAnalytics className="mr-3 text-2xl" /> Detailed analytics and
                earnings reports
              </li>
              <li
                className="flex items-center text-gray-700"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <MdPeopleAlt className="mr-3 text-2xl" /> Hassle-free customer
                management
              </li>
            </ul>
            <div className="flex space-x-6 mt-6">
              <img
                className="h-16"
                src="assets/images/google-play-6647242_1280.png"
                alt="Play Store"
                data-aos="fade-up"
                data-aos-delay="900"
              />
              <img
                className="h-14"
                src="assets/images/Download_on_the_App_Store_RGB_blk.svg.png"
                alt="App Store"
                data-aos="fade-up"
                data-aos-delay="1100"
              />
            </div>
          </div>

          {/* Image Section */}
          <div
            className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* White circular background */}
            <div
              className="relative flex items-center justify-center w-160 h-160 lg:w-96 lg:h-96 
        lg:bg-[#F8A71B] lg:rounded-full lg:shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            >
              <img
                className="w-72 lg:w-[14rem]"
                src="assets/images/samsung-galaxy-still.png"
                alt="Mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkOwner;
