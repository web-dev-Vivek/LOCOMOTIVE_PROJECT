import React from "react";
import Navbar from "../component/Navbar";

const Cells = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 px-10">
        <h1 className="text-6xl font-bold text-black">Cells</h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore our specialized cells and departments...
        </p>
      </div>
    </div>
  );
};

export default Cells;
