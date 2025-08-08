// src/pages/Team.jsx
import React, { useState } from "react";
import Navbar from "../component/Navbar";
import AddMemberModal from "../component/AddMemberModal";
import TeamComp from "../component/TeamComp";

const Team = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="p-6 mt-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">Meet the Team</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            + Add Member
          </button>
        </div>
        <TeamComp />
        <AddMemberModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
    </>
  );
};

export default Team;
