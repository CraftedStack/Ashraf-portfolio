import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          Ashraf Kazi
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Slide-in Effect)
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" className="mobile-item" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/projects" className="mobile-item" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/contact" className="mobile-item" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>*/}
    </nav>
  );
};

export default Navbar;
