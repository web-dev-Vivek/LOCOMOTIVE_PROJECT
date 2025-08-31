import React from "react";
import Navbar from "../component/Navbar";
import Club from "../assets/Club.jpg";

const Clubs = () => {
  return (
    <div
      style={{ backgroundColor: "#f2f7fa" }}
      className="md:min-h-screen flex flex-col justify-center items-center"
    >
      <Navbar />

      {/* Hero Section */}
      <div className="w-[95vw] border-b-1 border-black md:h-screen mt-20 pb-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Text */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-black"
          >
            CLUBS
          </h1>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img className="w-full md:w-[40vw] " src={Club} alt="Clubs" />
        </div>
      </div>

      {/* Extra Section Placeholder */}
      <div className="w-screen h-[50vh] md:h-screen"></div>
    </div>
  );
};

export default Clubs;
