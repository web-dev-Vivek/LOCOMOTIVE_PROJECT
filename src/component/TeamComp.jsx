import React, { useEffect, useState } from "react";
import { getUserData } from "../api.js";

const TeamComp = ({ refresh }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getUserData()
      .then((data) => {
        setMembers(data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err?.message || "Failed to fetch team members");
        setLoading(false);
      });
  }, [refresh]);

  return (
    <div className="p-6 min-h-screen bg-white">
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
            <h3 className="text-xl mb-3 flex justify-center font-semibold text-[#2b3a42]">
              {member.name}
            </h3>
            <p>
              <strong>Roll No:</strong> {member.rollNo}
            </p>
            <p>
              <strong>Gmail:</strong> {member.email}
            </p>
            <p>
              <strong>WhatsApp:</strong> {member.phoneNo}
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
