import { FaReact, FaJava, FaPython, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import './Skills.css';

function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-icon">
          <FaReact />
          <span>React</span>
        </div>
        <div className="skill-icon">
          <FaJava />
          <span>Java</span>
        </div>
        <div className="skill-icon">
          <FaPython />
          <span>Python</span>
        </div>
        <div className="skill-icon">
          <SiSpringboot />
          <span>Spring Boot</span>
        </div>
        <div className="skill-icon">
          <SiMysql />
          <span>MySQL</span>
        </div>
        <div className="skill-icon">
          <FaGitAlt />
          <span>Git</span>
        </div>
        <div className="skill-icon">
          <FaLinux />
          <span>Linux</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;