import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  MdOutlineEventAvailable,
  MdOutlinePayment,
  MdOutlineNavigation,
  MdOutlineDateRange,
} from "react-icons/md";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CustomerApp = () => {
  // const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <div className="bg-[#F8A71B] h-screen w-full py-12  overflow-auto flex items-center justify-center">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl text-center font-bold mb-12" data-aos="fade-up">
          Book a Slot
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-between pt-[5vh]">
          {/* Image Section */}
          <div
            className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* White circular background */}
            <div
              className="relative flex items-center justify-center w-160 h-160 lg:w-96 lg:h-96 
    lg:bg-white lg:rounded-full lg:shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            >
              <img
                className="w-72 lg:w-[14rem]"
                src="assets/images/samsung-galaxy-still(11).png"
                alt="Mockup"
              />
            </div>
          </div>

          {/* Text Section */}
          <div
            className="w-full lg:w-1/2 text-center lg:text-left"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h1 className="text-3xl font-bold mb-4">
              Effortless Parking at Your Fingertips
            </h1>
            <h3 className="text-lg font-light mb-6">
              With the PEAT Booking App, finding and reserving parking has never
              been easier. Explore available parking slots, book instantly, and
              secure your spot all in just a few taps.
            </h3>
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="space-y-4">
              <li
                className="flex items-center text-lg font-light"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <MdOutlineEventAvailable className="mr-2" /> Real-time parking
                slot availability
              </li>
              <li
                className="flex items-center text-lg font-light"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <MdOutlinePayment className="mr-2" /> Instant booking and secure
                payments
              </li>
              <li
                className="flex items-center text-lg font-light"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <MdOutlineNavigation className="mr-2" /> Easy navigation to
                parking locations
              </li>
              <li
                className="flex items-center text-lg font-light"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <MdOutlineDateRange className="mr-2" /> Flexible booking options
                for short or long stays
              </li>
            </ul>
            {/* More Button */}
            <button
              className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-700 transition"
              data-aos="fade-up"
              data-aos-delay="850"
              // onClick={() => navigate("/more")} // Navigate to the "/more" route
            >
              More
            </button>
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
        </div>
      </div>
    </div>
  );
};

export default CustomerApp;
