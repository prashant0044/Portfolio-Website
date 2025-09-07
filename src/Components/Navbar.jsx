import resume from "../assets/Prashant_Rana_Resume.pdf";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="navbar">
        <Link to="/" onClick={handleLinkClick}>
          <h2 className="main-name">Prashant Rana</h2>
        </Link>

        {/* Hamburger (mobile only) */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <div className={`links ${isOpen ? "active" : ""}`}>
          <Link to="/about" onClick={handleLinkClick}>About</Link>
          <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
          <Link to="/skills" onClick={handleLinkClick}>Skills</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            <button className="resume-button">Resume</button>
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Navbar;
