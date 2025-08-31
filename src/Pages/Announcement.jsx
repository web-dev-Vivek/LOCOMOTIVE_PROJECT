import React from "react";
import Navbar from "../component/Navbar";

const Announcement = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="md:w-[100vw] md:h-[100vh] flex flex-col justify-center items-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold">Announcements</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Latest announcements and updates will appear here. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default Announcement;
