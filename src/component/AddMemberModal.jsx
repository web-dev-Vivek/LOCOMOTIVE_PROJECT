import React, { useState } from "react";
import { postUserData } from "../api";
import HUB from "../assets/Hub.png";

const AddMemberModal = ({ isOpen, onClose, onMemberAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    email: "",
    phoneNo: "",
    skills: "",
  });

  const [error, setError] = useState(false); // shake ke liye

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (
      !formData.name ||
      !formData.rollNo ||
      !formData.email ||
      !formData.phoneNo ||
      !formData.skills ||
      !formData.email.includes("@")
    ) {
      setError(true);
      setTimeout(() => setError(false), 500); // reset animation
      return;
    }

    const success = await postUserData(formData);
    if (success) {
      alert("Member added successfully!");
      onMemberAdded();
      onClose();
    } else {
      alert("Failed to add member");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Shake Animation Style */}
      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-6px); }
            40%, 80% { transform: translateX(6px); }
          }
          .shake {
            animation: shake 0.5s ease-in-out;
          }
        `}
      </style>

      <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
        <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative">
          {/* Close Buttons */}
          <button
            onClick={onClose}
            className="absolute w-[10px] h-[10px] rounded-full bg-red-500 hover:scale-[2] top-3 right-3"
          ></button>
          <button
            onClick={onClose}
            className="absolute w-[10px] h-[10px] rounded-full bg-green-500 hover:scale-[2] top-3 right-7"
          ></button>
          <button
            onClick={onClose}
            className="absolute w-[10px] h-[10px] rounded-full bg-yellow-500 hover:scale-[2] top-3 right-11"
          ></button>

          <div className="text-2xl flex justify-center items-center gap-2 font-bold mb-6 text-center text-black">
            <img className="w-[40px]" src={HUB} alt="" /> Hack's hub
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-black/30 rounded-lg px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-black
                         placeholder-gray-500"
            />
            <input
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              placeholder="CSE 24/130"
              className="w-full border border-black/30 rounded-lg px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-black
                         placeholder-gray-500"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="vivekjha.cse24@satyug.edu.in"
              className="w-full border border-black/30 rounded-lg px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-black
                         placeholder-gray-500"
            />
            <input
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="WhatsApp Number"
              className="w-full border border-black/30 rounded-lg px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-black
                         placeholder-gray-500"
            />
            <input
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="React ,TailwindCss , ...."
              className="w-full border border-black/30 rounded-lg px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-black
                         placeholder-gray-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg border border-black text-black
                         hover:bg-black hover:text-white transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className={`px-5 py-2 rounded-lg bg-black text-white
                          hover:bg-white hover:text-black border border-black
                          transition-all ${error ? "shake" : ""}`}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMemberModal;
