// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react"; // icons
import { UserButton, UserProfile } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Announcement", path: "/announcement" },
    { name: "Committee", path: "/cells" },
  ];

  return (
    <div className="flex overflow-x-hidden relative justify-center">
      {/* Desktop Navbar */}
      <div className="hidden md:flex md:w-[100vw] fixed top-0 z-[99] md:h-[10vh] justify-evenly gap-40 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            className="hover:scale-[1.2] transition-transform duration-300 hover:border-b border-black text-sm"
            style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
            to={link.path}
          >
            {link.name}
          </Link>
        ))}
        <UserButton />
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full z-[99] flex justify-between items-center p-4 ">
        <button onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white shadow-2xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-[100] p-6`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        <nav className="flex flex-col gap-6 mt-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              className="text-lg hover:translate-x-2 transition-transform"
              style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
              to={link.path}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[90]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
