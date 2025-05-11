import React from "react";
import { useNavigate } from "react-router-dom"; // Import for redirection
import "../styles/AboutPage.css"; // Importing the CSS for the About Page

const AboutPage = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleViewServices = () => {
    navigate("/services"); // Redirect to services page
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="about-page-container">
          <div className="hero-content">
            <div className="profile-section">
              <img
                src="images/sam new pic.jpg" // Replace with your actual image path
                alt="Profile"
                className="profile-img"
              />
            </div>
            <div className="description-section">
              <h1 className="name">
                <strong>TechNova</strong>
              </h1>
              <p className="intro">
                Hello, I'm <strong>TechNova</strong>, a passionate and dedicated software developer with a keen interest in creating impactful and user-friendly web applications. With a strong foundation in full-stack web development, I specialize in crafting responsive, high-performance websites and web applications using modern technologies like <strong>JavaScript, React, Node.js</strong>, and more. I'm constantly learning and adapting to new trends in the tech world to enhance my skills and deliver innovative solutions.
                <br /><br />
                I enjoy solving complex problems and optimizing user experiences through clean, efficient code. My goal is not only to build functional and scalable applications but also to ensure that they provide a seamless and enjoyable experience for users.
                <br /><br />
                In addition to my technical expertise, I value collaboration and enjoy working in teams to bring ideas to life. I believe that software development is a continuous learning process, and I'm always excited about exploring new tools and frameworks to improve my craft.
                <br /><br />
                When I'm not coding, you can find me learning about new technologies, exploring design patterns, or working on side projects that challenge me to think outside the box. I’m always eager to connect with fellow developers and tech enthusiasts, so feel free to reach out!
                <br /><br />
                🎓 I'm also a <strong>Certified Cybersecurity Expert</strong> through IBM SkillsBuild, and a trained <strong>Graphic Designer</strong> from Mwea Software Company. These skills give me a well-rounded approach to building secure and visually appealing digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="skills-section">
        <div className="skills-container">
          <h2 className="skills-title">Skills & Expertise</h2>

          {/* HTML Skill */}
          <div className="skill html">
            <div className="skill-header">
              <img src="images/html.png" alt="HTML" className="skill-icon" />
              <span>HTML</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress html" style={{ width: "95%" }}>
                <span className="skill-percentage">95%</span>
              </div>
            </div>
          </div>

          {/* CSS Skill */}
          <div className="skill css">
            <div className="skill-header">
              <img src="images/css.svg" alt="CSS" className="skill-icon" />
              <span>CSS</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress css" style={{ width: "90%" }}>
                <span className="skill-percentage">90%</span>
              </div>
            </div>
          </div>

          {/* JavaScript Skill */}
          <div className="skill javascript">
            <div className="skill-header">
              <img src="images/js.png" alt="JavaScript" className="skill-icon" />
              <span>JavaScript</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress js" style={{ width: "90%" }}>
                <span className="skill-percentage">90%</span>
              </div>
            </div>
          </div>

          {/* React Skill */}
          <div className="skill react">
            <div className="skill-header">
              <img src="images/react.svg" alt="React" className="skill-icon" />
              <span>React</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress react" style={{ width: "85%" }}>
                <span className="skill-percentage">85%</span>
              </div>
            </div>
          </div>

          {/* Node.js Skill */}
          <div className="skill node">
            <div className="skill-header">
              <img src="images/node js.png" alt="Node.js" className="skill-icon" />
              <span>Node.js</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress node" style={{ width: "80%" }}>
                <span className="skill-percentage">80%</span>
              </div>
            </div>
          </div>

          {/* Bootstrap Skill */}
          <div className="skill bootstrap">
            <div className="skill-header">
              <img src="images/bootstrap.png" alt="Bootstrap" className="skill-icon" />
              <span>Bootstrap</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress bootstrap" style={{ width: "85%" }}>
                <span className="skill-percentage">85%</span>
              </div>
            </div>
          </div>

          {/* Express Skill */}
          <div className="skill express">
            <div className="skill-header">
              <img src="images/express.svg" alt="Express.js" className="skill-icon" />
              <span>Express.js</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress express" style={{ width: "75%" }}>
                <span className="skill-percentage">75%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <p className="cta-text">Explore my services and get in touch!</p>
          <button
            className="cta-button"
            onClick={handleViewServices}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "12px 24px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease"
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            View Services
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
