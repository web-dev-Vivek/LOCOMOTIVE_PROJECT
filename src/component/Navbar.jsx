// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          LOCOMOTIVE
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </div>

        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/Home" className="nav-links" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Events" className="nav-links" onClick={toggleMenu}>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Team" className="nav-links" onClick={toggleMenu}>
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Announcement" className="nav-links" onClick={toggleMenu}>
              Announcements
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Cells" className="nav-links" onClick={toggleMenu}>
              Cells
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
