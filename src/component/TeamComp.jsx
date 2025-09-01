import React, { useEffect, useState } from "react";
import { getUserData } from "../api.js";

const TeamComp = ({ refresh }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterSkill, setFilterSkill] = useState(""); // filter input

  useEffect(() => {
    setLoading(true);
    getUserData()
      .then((data) => {
        // sort alphabetically by name
        const sorted = (data || []).sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setMembers(sorted);
        setLoading(false);
      })
      .catch((err) => {
        setError(err?.message || "Failed to fetch team members");
        setLoading(false);
      });
  }, [refresh]);

  // Apply skill filter
  const filteredMembers = members.filter((member) => {
    if (!filterSkill.trim()) return true; // no filter applied
    const skillsArray = Array.isArray(member.skills)
      ? member.skills
      : member.skills?.split(",") || [];
    return skillsArray.some((skill) =>
      skill.toLowerCase().includes(filterSkill.toLowerCase())
    );
  });

  return (
    <div className="p-6 min-h-screen bg-white">
      {loading && <p className="text-center">Loading team members...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && members.length === 0 && (
        <p className="text-center">No team members found.</p>
      )}

      {/* 🔍 Filter input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Filter by skill..."
          value={filterSkill}
          onChange={(e) => setFilterSkill(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full max-w-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
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

      {/* No match case */}
      {!loading && filteredMembers.length === 0 && (
        <p className="text-center mt-6 text-gray-500">
          No team members found with skill "{filterSkill}"
        </p>
      )}
    </div>
  );
};

export default TeamComp;
