import React from "react";
import Navbar from "../component/Navbar.jsx";

const Announcement = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black">
      <Navbar />
      <div className="md:w-[100vw] md:h-[100vh] flex flex-col justify-center items-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          NOTES SECTION....
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Notes section, where you get all the notes of all year , semester and
          subjects wise . Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default Announcement;
