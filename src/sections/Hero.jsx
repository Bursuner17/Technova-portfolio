import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side - Profile Image */}
        <div className="hero-left">
          <motion.img
            src="/images/sam new pic.jpg"
            alt="Profile"
            className="hero-profile-img"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>

        {/* Right Side - Content */}
        <div className="hero-right">
          <motion.h1
            className="hero-title"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm <span className="highlighted-name">TechNova</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Full Stack Developer | Graphics Designer | Cybersecurity Expert.
            <br /><br />
            I specialize in crafting innovative web applications, designing visually stunning graphics, and securing systems to ensure data protection. Let's turn your ideas into reality with creativity and precision.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.a
              href="#contact"
              className="hero-button-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>

            <motion.a
              href="#projects"
              className="hero-button-secondary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              See My Work
            </motion.a>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">WhatsApp</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">LinkedIn</a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon facebook">Facebook</a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon instagram">Instagram</a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
