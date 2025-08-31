import React, { useState } from "react";
import { postUserData } from "../api";

const AddMemberModal = ({ isOpen, onClose, onMemberAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    email: "",
    phoneNo: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
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
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Team Member</h2>
        <input
          name="name"
          onChange={handleChange}
          placeholder="Name"
          className="mb-2 w-full border p-2"
        />
        <input
          name="rollNo"
          onChange={handleChange}
          placeholder="College Roll No."
          className="mb-2 w-full border p-2"
        />
        <input
          name="email"
          onChange={handleChange}
          placeholder="Gmail"
          className="mb-2 w-full border p-2"
        />
        <input
          name="phoneNo"
          onChange={handleChange}
          placeholder="WhatsApp No."
          className="mb-2 w-full border p-2"
        />
        <input
          name="skills"
          onChange={handleChange}
          placeholder="Skills"
          className="mb-2 w-full border p-2"
        />
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;
