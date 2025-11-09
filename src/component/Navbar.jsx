// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/20 backdrop-blur-lg shadow-lg border-b border-gray-200/20"
          : "bg-white/20 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300"
          >
            LOCOMOTIVE
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                to="/Home"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Events"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/Team"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/Announcement"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Announcements
              </Link>
            </li>
            <li>
              <Link
                to="/Cells"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Cells
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-80 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border border-gray-200/30 shadow-2xl rounded-b-2xl mx-4 mt-2">
            <div className="p-6 space-y-4">
              <Link
                to="/Home"
                onClick={toggleMenu}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
              >
                Home
              </Link>
              <Link
                to="/Events"
                onClick={toggleMenu}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
              >
                Events
              </Link>
              <Link
                to="/Team"
                onClick={toggleMenu}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
              >
                Team
              </Link>
              <Link
                to="/Announcement"
                onClick={toggleMenu}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
              >
                Announcements
              </Link>
              <Link
                to="/Cells"
                onClick={toggleMenu}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
              >
                Cells
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
