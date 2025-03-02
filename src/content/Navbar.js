import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Overlay when menu is open */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            Ashraf Kazi
          </Link>

          {/* Desktop Menu */}
          <div className="nav-links">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/skills" className="nav-item">Skills</Link>
            <Link to="/projects" className="nav-item">Projects</Link>
            <Link to="/certificates" className="nav-item">Certificates</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Slide-in Effect) */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={closeMenu}>
          <X size={28} />
        </button>
        <Link to="/" className="mobile-item" onClick={closeMenu}>Home</Link>
        <Link to="/skills" className="mobile-item" onClick={closeMenu}>Skills</Link>
        <Link to="/projects" className="mobile-item" onClick={closeMenu}>Projects</Link>
        <Link to="/certificates" className="mobile-item" onClick={closeMenu}>Certificates</Link>
        <Link to="/contact" className="mobile-item" onClick={closeMenu}>Contact</Link>
      </div>
    </>
  );
};

export default Navbar;
