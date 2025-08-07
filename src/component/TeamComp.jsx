// src/components/TeamComp.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const TeamComp = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: loading state
  const [error, setError] = useState(null); // Optional: error state

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "teamMembers"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMembers(data);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching team members:", err);
        setError("Failed to load team members.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
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
