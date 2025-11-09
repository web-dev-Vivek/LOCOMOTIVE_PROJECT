// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu, User, LogOut } from "lucide-react";
import { useAuth, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isSignedIn, isLoaded } = useAuth();

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
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/20"
          : "bg-transparent"
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
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
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

            {/* Auth Section */}
            <div className="flex items-center space-x-4">
              {isLoaded && (
                <>
                  {isSignedIn ? (
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "w-8 h-8",
                        },
                      }}
                    />
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Link
                        to="/sign-in"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium px-3 py-1 rounded-md hover:bg-blue-50"
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/sign-up"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {isLoaded && isSignedIn && (
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                  },
                }}
              />
            )}
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
              ? "max-h-96 opacity-100"
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

              {/* Mobile Auth Section */}
              {isLoaded && !isSignedIn && (
                <div className="border-t pt-4 space-y-2">
                  <Link
                    to="/sign-in"
                    onClick={toggleMenu}
                    className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/sign-up"
                    onClick={toggleMenu}
                    className="block bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 text-center"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
