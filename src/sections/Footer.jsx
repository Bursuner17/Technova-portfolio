import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion'; // Animation from framer-motion
import './Footer.css'; // Import CSS

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }} // Initial state: hidden and shifted down
      whileInView={{ opacity: 1, y: 0 }} // Final state: visible and centered
      transition={{ duration: 1 }} // Smooth transition effect
      viewport={{ once: true }} // Trigger animation only once when it comes into view
    >
      <div className="footer-container">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon facebook"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon instagram"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon linkedin"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://wa.me/+254748259452"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon whatsapp"
          aria-label="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} TechNova. All rights reserved.</p>
    </motion.footer>
  );
}

export default Footer;
