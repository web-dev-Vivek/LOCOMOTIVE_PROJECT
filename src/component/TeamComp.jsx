// src/components/TeamComp.jsx
import React, { useEffect, useState } from "react";

const TeamComp = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Sample static data to replace Firebase data
  const sampleMembers = [
    {
      id: 1,
      name: "John Doe",
      rollno: "2021001",
      gmail: "john.doe@example.com",
      whatsapp: "+91-9876543210",
      skills: ["React", "JavaScript", "Node.js"]
    },
    {
      id: 2,
      name: "Jane Smith",
      rollno: "2021002",
      gmail: "jane.smith@example.com",
      whatsapp: "+91-9876543211",
      skills: ["Python", "Machine Learning", "Data Science"]
    },
    {
      id: 3,
      name: "Mike Johnson",
      rollno: "2021003",
      gmail: "mike.johnson@example.com",
      whatsapp: "+91-9876543212",
      skills: ["Java", "Spring Boot", "Microservices"]
    }
  ];

  useEffect(() => {
    // Simulate loading data (replace with your new data source)
    setLoading(true);
    setTimeout(() => {
      setMembers(sampleMembers);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-6 min-h-screen bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Our Team</h2>

      {loading && <p className="text-center">Loading team members...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && members.length === 0 && (
        <p className="text-center">No team members found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-[#f2f7fa] p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-[#2b3a42]">
              {member.name}
            </h3>
            <p>
              <strong>Roll No:</strong> {member.rollno}
            </p>
            <p>
              <strong>Gmail:</strong> {member.gmail}
            </p>
            <p>
              <strong>WhatsApp:</strong> {member.whatsapp}
            </p>
            <p>
              <strong>Skills:</strong>{" "}
              {Array.isArray(member.skills)
                ? member.skills.join(", ")
                : member.skills}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamComp;
