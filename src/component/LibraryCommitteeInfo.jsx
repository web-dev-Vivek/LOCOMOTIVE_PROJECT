import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LibraryCommitteeInfo = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none none",
        scrub: 3,
      },
      x: -100, // animate from left
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="w-full px-6 md:px-20 py-20 flex justify-center items-center bg-white text-black">
      <div
        ref={cardRef}
        className="w-full max-w-5xl border border-gray-300 rounded-xl shadow-xl p-8 md:p-14 bg-white/60 backdrop-blur-md space-y-10"
      >
        {/* Section Heading */}
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight border-b-2 border-black inline-block pb-1">
            2. Library Committee (2025–26)
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
            <li>Oversee and enhance the functioning of the library.</li>
            <li>
              Ensure resources are effectively utilized by students & staff.
            </li>
          </ul>
        </div>

        {/* Members */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            👥 Committee Members:
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Dr. S. S. Mudgal – Prof., AS&H (Prof. In charge)</li>
            <li>Ms. Sanchita Khantwal – AP, DMS (Member)</li>
            <li>Ms. Rachna Shrivastava – AP, DCSE (Member)</li>
            <li>Dr. Mansi Rastogi – AP, AS&H (Member)</li>
            <li>Mr. Baljeet Singh – Librarian (Ex-officio)</li>
          </ul>
        </div>

        {/* Notice Details */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            📅 Notice Info:
          </h3>
          <p className="text-gray-700">
            Notice No: <strong>SDIET/Notice/2025-26/019</strong> <br />
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
            href="/Library Committee for Academic Year 2025-26.pdf"
            download
            className="inline-block px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition duration-300"
          >
            🔽 Download PDF
          </a>
          <p className="text-sm text-gray-500 mt-1">
            (Includes official notice and full committee details)
          </p>
        </div>
      </div>
    </div>
  );
};

export default LibraryCommitteeInfo;
