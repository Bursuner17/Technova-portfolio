import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css'; // if the CSS is in the same folder

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* TechNova logo on the left */}
        <h1 className="logo">TechNova</h1>

        {/* Hamburger icon for small screens */}
        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className="nav-link">Home</Link> {/* Home link */}
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link> {/* About link */}
          </li>
          <li>
            <Link to="/projects" className="nav-link">Projects</Link> {/* Projects link */}
          </li>
          <li>
            <Link to="/services" className="nav-link">Services</Link> {/* Projects link */}
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link> {/* Contact link */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
