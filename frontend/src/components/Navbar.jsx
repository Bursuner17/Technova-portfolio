import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css'; // if the CSS is in the same folder

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        {/* TechNova logo on the left */}
        <h1 className="text-2xl font-bold">TechNova</h1>

        {/* Navigation links aligned to the right */}
        <ul className="flex gap-8">
          <li>
            <Link to="/" className="hover:text-blue-300 transition">Home</Link> {/* Home link */}
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-300 transition">About</Link> {/* About link */}
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-300 transition">Projects</Link> {/* Projects link */}
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link> {/* Contact link */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
