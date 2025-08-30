// src/components/AddMemberModal.jsx
import React, { useState } from "react";

const AddMemberModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    gmail: "",
    whatsapp: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // TODO: Replace with your new data storage solution
      console.log("Member data to be saved:", formData);
      
      // You can implement local storage, API call, or other storage method here
      // Example with localStorage:
      // const existingMembers = JSON.parse(localStorage.getItem('teamMembers') || '[]');
      // const newMember = { ...formData, id: Date.now() };
      // localStorage.setItem('teamMembers', JSON.stringify([...existingMembers, newMember]));
      
      alert("Member data logged to console. Implement your storage solution here.");
      onClose();
    } catch (err) {
      console.error("Error adding member: ", err);
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
          name="rollno"
          onChange={handleChange}
          placeholder="College Roll No."
          className="mb-2 w-full border p-2"
        />
        <input
          name="gmail"
          onChange={handleChange}
          placeholder="Gmail"
          className="mb-2 w-full border p-2"
        />
        <input
          name="whatsapp"
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
