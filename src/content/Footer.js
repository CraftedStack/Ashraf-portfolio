import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css"; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Let's Connect!</h2>

        <div className="footer-icons">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="icon" />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="icon" />
          </a>
          <a href="mailto:your-email@example.com" aria-label="Email">
            <FaEnvelope className="icon" />
          </a>
        </div>

        <p className="footer-text">Designed & Developed by <span>Ashraf Kazi</span></p>
        <p className="footer-copyright">© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
