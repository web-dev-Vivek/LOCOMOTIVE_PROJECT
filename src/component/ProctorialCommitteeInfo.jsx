import React from "react";

const ProctorialCommitteeInfo = () => {
  return (
    <div className="w-full px-6 md:px-20 py-5 md:py-10  flex justify-center items-center bg-white text-black">
      <div className="w-full max-w-5xl border border-gray-300 rounded-xl shadow-xl p-8 md:p-14 bg-white/60 backdrop-blur-md space-y-10">
        {/* Section Heading */}
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight border-b-2 border-black inline-block pb-1">
            ⚖️ Proctorial Board / Discipline Committee (2025–26)
          </h2>
          <p className="italic text-gray-600 text-lg">
            Satyug Darshan Institute of Engineering & Technology
          </p>
        </div>

        {/* Objectives */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            📌 Objectives:
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Look after disciplinary issues within the institute.</li>
            <li>Maintain discipline and a positive learning environment.</li>
          </ul>
        </div>

        {/* Members */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            👥 Committee Members:
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Dr. Mavank Verma – Asso. Prof., AS&H (Chief Proctor)</li>
            <li>Ms. Sonia Walia – AP, AS&H (Dy. Chief Proctor)</li>
            <li>Dr. Ravi Bakshi – AP, Management (Dy. Chief Proctor)</li>
            <li>Mr. Sumit Rathee – AP, Management (Member Proctor)</li>
            <li>Mr. Paramjeet Singh Ahuja – AP, AS&H (Member Proctor)</li>
            <li>Mr. Rakesh Kumar – AP, CSE (Member Proctor)</li>
            <li>Ms. Shikha Arora – AP, CSE (Member Proctor)</li>
            <li>Ms. Shilpa Gupta – AP, CSE (Member Proctor)</li>
            <li>Ms. Seema Parihar – AP, Management (Member Proctor)</li>
            <li>Mr. Jitender Singh – Security In-charge (Member Proctor)</li>
            <li>
              Capt. Shivram Singh Gurjar – Warden Boys Hostel (Member Proctor)
            </li>
            <li>Ms. Kamlesh Sharma – Warden Girls Hostel (Member Proctor)</li>
            <li>Capt. Vijaypal Nagar – Member Proctor</li>
          </ul>
        </div>

        {/* Notice Details */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            📅 Notice Info:
          </h3>
          <p className="text-gray-700">
            Ref No: <strong>SDIET/NOTICE/2025-26/014</strong> <br />
            Date: <strong>31st July, 2025</strong> <br />
            Issued by: <strong>Dr. Shailendra Kumar, Principal</strong>
          </p>
        </div>

        {/* Download Button */}
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-gray-900">
            📄 Full Notice PDF:
          </h3>
          <a
            href="/Proctorial Board ( Discipline committee) AY 2025-26.pdf"
            download
            className="inline-block px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition duration-300"
          >
            🔽 Download PDF
          </a>
          <p className="text-sm text-gray-500 mt-1">
            (Includes complete member list and responsibilities)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProctorialCommitteeInfo;
