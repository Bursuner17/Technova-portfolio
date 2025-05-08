import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools } from 'react-icons/fa'; // ✅ Added icons
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I’m a full-stack web developer specializing in building exceptional digital experiences. 
          I love turning ideas into reality through creative design and innovative development.
        </p>

        <div className="about-cards">
          {/* Animated Card 1 */}
          <motion.div
            className="about-card card-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FaCode className="about-icon" /> {/* ✅ Added icon */}
            <h3 className="about-card-title">Frontend</h3>
            <p className="about-card-description">
              React, HTML, CSS, Tailwind, JavaScript
            </p>
          </motion.div>

          {/* Animated Card 2 */}
          <motion.div
            className="about-card card-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaServer className="about-icon" /> {/* ✅ Added icon */}
            <h3 className="about-card-title">Backend</h3>
            <p className="about-card-description">
              Node.js, Express.js, MongoDB, SQL, PostgreSQL
            </p>
          </motion.div>

          {/* Animated Card 3 */}
          <motion.div
            className="about-card card-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <FaTools className="about-icon" /> {/* ✅ Added icon */}
            <h3 className="about-card-title">Other Skills</h3>
            <p className="about-card-description">
              Git, Figma, Postman, APIs, Firebase
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
