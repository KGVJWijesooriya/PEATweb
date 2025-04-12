import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const AboutUS = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <section >
    <div className="py-10 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 bg-white rounded-lg ">
        <div>
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-black mb-6 text-left flex justify-center items-center pt-10">
              About Us
            </h1>
            <div className=" p-6 md:p-10 lg:p-14 flex flex-col lg:flex-row items-center lg:items-center">
          {/* Text Content */}
          <div
            className="lg:w-2/3"
            data-aos="fade-up"
            data-aos-delay="200" // Delay for the first animation
          >
            <p
              className="text-lg md:text-xl font-light text-gray-600 leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="300" // Slight delay for the second animation
            >
              The Easy Park app is revolutionizing parking management with a
              seamless, user-friendly online system accessible globally.
              Designed to address the challenges of parking in bustling cities,
              our platform provides an efficient solution for finding,
              reserving, and paying for parking spots in real-time.
            </p>
            <p
              className="text-lg md:text-xl font-light text-gray-600 leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Registered under number{" "}
              <span className="font-semibold text-gray-800">PV00306529, </span> 
              Easy Park offers a robust network of parking facilities and an
              intuitive interface to eliminate the stress and uncertainty of
              parking. By prioritizing convenience, we empower drivers to park
              confidently and efficiently wherever they go.
            </p>
            <p
              className="text-lg md:text-xl font-light text-gray-600 leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              With a focus on innovation and customer satisfaction, Easy Park
              streamlines the entire parking process, saving users valuable
              time. As a global leader in parking solutions, we are transforming
              the parking experience, offering hassle-free service and unmatched
              convenience. Join us in redefining parking with Easy Park.
            </p>
            {/* <div
              className="flex justify-start mt-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300">
                Learn More
              </button>
            </div> */}
          </div>
          {/* Image */}
          <div
            className="lg:w-2/3 mt-6 lg:mt-0 lg:ml-20"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <img
              src="../public/assets/images/7608424.jpg"
              alt="Easy Park App"
            />
          </div>
        </div>
            </div>

      </div>
    </div></section>
  );
};

export default AboutUS;
