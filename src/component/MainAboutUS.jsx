import React from 'react'

import AboutUS from "./AboutUS.jsx";

const MainAboutUS = () => {
  return (
    <section
      className="relative w-screen h-auto flex justify-center items-center px-[5vw] py-12 md:h-[100vh] text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('/assets/images/car-car-park.jpg')`,
      }}
    >
        <div>
        <AboutUS /></div>
    </section>

  )
}

export default MainAboutUS