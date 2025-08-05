// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex relative justify-center">
      <div className="md:w-[100vw] fixed top-0 z-[99] md:h-[10vh] flex justify-evenly gap-40 items-center">
        <Link
          className="hover:scale-[1.2] z-[99] transition-transform duration-300 hover:border-b-1 border-black text-sm"
          style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
          to="/"
        >
          Home
        </Link>
        <Link
          className="hover:scale-[1.2] z-[99] transition-transform duration-300 hover:border-b-1 border-black text-sm"
          style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
          to="/events"
        >
          Events
        </Link>
        <Link
          className="hover:scale-[1.2] z-[99] transition-transform duration-300 hover:border-b-1 border-black text-sm"
          style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
          to="/team"
        >
          Team
        </Link>
        <Link
          className="hover:scale-[1.2] z-[99] transition-transform duration-300 hover:border-b-1 border-black text-sm"
          style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
          to="/announcement"
        >
          Announcement
        </Link>
        <Link
          className="hover:scale-[1.2] z-[99] transition-transform duration-300 hover:border-b-1 border-black text-sm"
          style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
          to="/clubs"
        >
          Our Clubs
        </Link>
        <Link
          className="hover:scale-[1.2] z-[99] transition-transform duration-300 hover:border-b-1 border-black text-sm"
          style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
          to="/cells"
        >
          Commitee
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
