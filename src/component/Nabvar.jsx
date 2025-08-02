// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <div className="flex relative justify-center ">
      <div className="md:w-[100vw] fixed top-0 md:h-[10vh] flex justify-evenly gap-40 items-center">
        <a
          className="text-sm"
          style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
          href="#Event"
        >
          Events
        </a>
        <a
          className="text-sm"
          style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
          href="#Team"
        >
          Team
        </a>
        <a
          className="text-sm"
          style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
          href="#Announcement"
        >
          Announcement
        </a>
        <a
          className="text-sm"
          style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
          href="#Clubs"
        >
          Our Clubs
        </a>
        <a
          className="text-sm"
          style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
          href="#Shell"
        >
          Cells
        </a>
      </div>
    </div>
  );
};

export default Navbar;
