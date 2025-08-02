import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black px-6 md:px-10 py-10 md:py-14 border-t border-black w-full font-['Roboto']">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 transition-all duration-300 text-center md:text-left">
        {/* Left Section - Branding */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide font-['Cormorant_Garamond']">
            ENTER
          </h2>
          <p className="text-sm mt-2 text-gray-500 italic">
            Bridging ideas, innovation, and impact.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-3 uppercase tracking-widest font-['Oswald']">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            {[
              ["#events", "Upcoming Events"],
              ["#clubs", "Student Clubs"],
              ["#hackathons", "Hackathons"],
              ["#about", "About Us"],
              ["#contact", "Contact"],
            ].map(([href, label], i) => (
              <li key={i}>
                <a
                  href={href}
                  className="hover:text-black hover:underline transition-all"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Connect */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-3 uppercase tracking-widest font-['Oswald']">
            Connect
          </h3>
          <p className="text-sm text-gray-600">enter@college.edu</p>
          <div className="flex justify-center md:justify-start space-x-5 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-xl md:text-2xl hover:text-pink-500 transition-all" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="text-xl md:text-2xl hover:text-black transition-all" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-xl md:text-2xl hover:text-blue-600 transition-all" />
            </a>
            <a href="mailto:enter@college.edu">
              <FaEnvelope className="text-xl md:text-2xl hover:text-yellow-600 transition-all" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-5 text-center text-xs text-gray-500 font-['Roboto'] tracking-wide">
        © {new Date().getFullYear()} CampusConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
