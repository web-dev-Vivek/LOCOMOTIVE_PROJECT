// src/pages/Team.jsx
import React, { useState } from "react";
import Navbar from "../component/Navbar";
import AddMemberModal from "../component/AddMemberModal";
import TeamComp from "../component/TeamComp";
import HUB from "../assets/Hub.png";

const Team = () => {
  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleMemberAdded = () => {
    setRefresh((r) => !r);
  };

  return (
    <>
      <Navbar />
      <div className="p-6 mt-10">
        <div className="flex flex-col border-b-1 border-gray-500 justify-evenly items-center mb-4 md:pb-0 pb-6 ">
          <div
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-5xl md:text-7xl  flex justify-center items-center gap-2 font-bold mb-6 text-center text-black"
          >
            <img className="md:w-[8vw] w-[60px]" src={HUB} alt="" /> Hack's hub
          </div>
          <button
            onClick={() => setShowModal(true)}
            style={{ fontFamily: "'Limelight', display" }}
            className="bg-yellow-500 hover:bg-yellow-400 hover:scale-[1.1] text-black font-bold rounded-full px-4 py-2 rounded"
          >
            I'm in
          </button>
        </div>

        <TeamComp refresh={refresh} />
        <AddMemberModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onMemberAdded={handleMemberAdded}
        />
      </div>
    </>
  );
};

export default Team;
