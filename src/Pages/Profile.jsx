import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaPalette } from 'react-icons/fa';
import './Profile.css'; // Create this file for styling

const Profile = () => {
  const skills = [
    { name: 'React', icon: <FaCode />, level: 90 },
    { name: 'JavaScript', icon: <FaCode />, level: 85 },
    { name: 'UI Design', icon: <FaPalette />, level: 75 },
  ];

  return (
    <section className="profile-section">
      {/* Hero Section */}
      <div className="profile-hero">
        <img 
          src="/piyush.jpg" 
          alt="Piyush Lohani" 
          className="profile-image"
        />
        <div className="profile-intro">
          <h1>Hi, I'm <span className="highlight">Piyush Lohani</span></h1>
          <h2>Full stack Developer</h2>
          <p>
            I build beautiful, performant web experiences with React.
            When not coding, I enjoy photography and specialty coffee.
          </p>
        </div>
      </div>

{/* Skills Section */}
<div className="skills-section">
        <h3>My Toolkit</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="profile-cta">
        <h3>Let's Connect!</h3>
        <div className="social-links">
          <a href="https://github.com/Piyush796501" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/piyush-lohani" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:lohanipiyush15@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <button className="cta-button">
          View My Projects
        </button>
      </div>
    </section>
  );
};

export default Profile;



