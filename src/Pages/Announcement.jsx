import React from "react";
import Navbar from "../component/Navbar";

const Announcement = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 px-10">
        <h1 className="text-6xl font-bold text-black">Announcements</h1>
        <p className="mt-4 text-lg text-gray-600">
          Latest announcements and updates...
        </p>
      </div>
    </div>
  );
};

export default Announcement;
