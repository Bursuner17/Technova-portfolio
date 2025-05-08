import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-description">
          Some of the projects I've worked on recently. Each project is a unique piece of development 🛠️.
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <img src="/images/ecommerce.jpg" alt="Project 1" className="project-image" />
            <h3 className="project-title">E-commerce Website</h3>
            <p className="project-description">
              An online store built with React and Node.js for a smooth shopping experience.
            </p>
          </div>

          <div className="project-card">
            <img src="/images/porfolio image.PNG" alt="Project 2" className="project-image" />
            <h3 className="project-title">Portfolio Website</h3>
            <p className="project-description">
              A personal portfolio showcasing my skills, projects, and experience.
            </p>
          </div>

          <div className="project-card">
            <img src="/images/blog.png" alt="Project 3" className="project-image" />
            <h3 className="project-title">Blog Platform</h3>
            <p className="project-description">
              A full-stack blogging platform with user authentication and real-time updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
