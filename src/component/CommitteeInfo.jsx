import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CommitteeInfo = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%", // when card is 80% from top of viewport
        end: " top 20%",
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
            1. Internal Complaint Committee
          </h2>
          <p className="italic text-gray-600 text-lg">
            (Prevention of Sexual Harassment - POSH)
          </p>
        </div>

        {/* Objectives */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            📌 Objectives:
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Ensure a safe, respectful environment for women.</li>
            <li>Prevent and address sexual harassment on campus.</li>
          </ul>
        </div>

        {/* Harassment Types */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            ⚠️ Harassment Includes:
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Unwelcome touch or remarks</li>
            <li>Threats for sexual favours</li>
            <li>Public insults or spreading rumors</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            🛑 Strict Actions Will Be Taken
          </h3>
          <p className="text-gray-700">
            Against anyone found guilty, including possible legal action.
          </p>
        </div>

        {/* Helpline */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">☎️ Helpline:</h3>
          <p className="font-bold text-lg text-black">+91-7827755966</p>
        </div>

        {/* Download Button */}
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-gray-900">
            📄 Full Committee PDF:
          </h3>
          <a
            href="/committee.pdf"
            download
            className="inline-block px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition duration-300"
          >
            🔽 Download PDF
          </a>
          <p className="text-sm text-gray-500 mt-1">
            (Includes member list, rules, and disciplinary process)
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommitteeInfo;
