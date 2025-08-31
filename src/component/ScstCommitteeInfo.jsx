import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScstCommitteeInfo = () => {
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
      x: 100, // animate from right
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="w-full px-6 md:px-20 py-5 md:py-10 flex justify-center items-center bg-white text-black">
      <div
        ref={cardRef}
        className="w-full max-w-5xl border border-gray-300 rounded-xl shadow-xl p-8 md:p-14 bg-white/60 backdrop-blur-md space-y-10"
      >
        {/* Section Heading */}
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight border-b-2 border-black inline-block pb-1">
            ✊ SC/ST Committee (2025–26)
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
            <li>
              Safeguard the rights and welfare of SC/ST students and staff.
            </li>
            <li>
              Provide a platform for representation and grievance redressal.
            </li>
          </ul>
        </div>

        {/* Members */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            👥 Committee Members:
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Ms. Jagriti Malviya – Chairperson (Faculty Representation)</li>
            <li>Dr. Munish Nagar – Member (Faculty Representation)</li>
            <li>Ms. Vaishali – Member (Faculty Representation)</li>
            <li>Mr. Vijaypal Nagar – Member (Non-Teaching)</li>
            <li>Mr. Baljeet Singh – Member (Non-Teaching)</li>
          </ul>
        </div>

        {/* Notice Details */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            📅 Notice Info:
          </h3>
          <p className="text-gray-700">
            Notice No: <strong>SDIET/Notice/2025-26/020</strong> <br />
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
            href="/SC- ST Committee for Academic Year 2025-26.pdf"
            download
            className="inline-block px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition duration-300"
          >
            🔽 Download PDF
          </a>
          <p className="text-sm text-gray-500 mt-1">
            (Includes official notice and complete member list)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScstCommitteeInfo;
