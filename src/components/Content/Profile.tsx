import React from "react";
import { FaEnvelope, FaGithub, FaUniversity, FaCode, FaLinkedin, FaJava } from "react-icons/fa";
import { SiOracle, SiEclipseide, SiIntellijidea, SiGit, SiLinux, SiReact, SiJavascript, SiTypescript, SiSpringboot, SiPython, SiCplusplus, SiHtml5, SiCss3} from "react-icons/si";
import "./profile.css";

const Profile: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src="photo.png" alt="Profile" />
        <p className="profile-description name">Subin Kim</p>
        <p className="profile-description">Front-end Developer</p>
        <p className="profile-description">Passionate about UI/UX & Software Engineering</p>
      </div>

      <div className="profile-info">
        <h2>Profile</h2>

        <div className="profile-links">
          <p>
            <FaEnvelope className="icon icon-email" /> Email:{" "}
            <a href="mailto:soo010410@naver.com">soo010410@naver.com</a> or{" "}
            <a href="mailto:soo010410@gmail.com">soo010410@gmail.com</a>
          </p>
          <p>
            <FaGithub className="icon" /> GitHub:{" "}
            <a href="https://github.com/green-study" target="_blank" rel="noopener noreferrer">
              github.com/green-study
            </a>
          </p>
          <p>
            <FaLinkedin className="icon icon-linkedin" /> LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/subin-kim-36813b237/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/subin-kim
            </a>
          </p>
        </div>

        <div className="profile-education">
          <p>
            <FaUniversity className="icon" /> Chungnam National University: The Division of Computer Convergence
          </p>
          <p>GPA: 4.5/4.5</p>
        </div>

        <div className="profile-skills">
          <h3>Programming Languages</h3>
          <p>
            <SiReact className="icon icon-react" /> React, <SiJavascript className="icon icon-javascript" /> JavaScript, <SiTypescript className="icon icon-typescript" /> TypeScript,
            <SiHtml5 className="icon icon-html5" /> HTML, <SiCss3 className="icon icon-css3" /> CSS, <FaJava className="icon icon-java" /> Java, <SiSpringboot className="icon" /> Spring Boot, 
            <SiPython className="icon icon-python" /> Python, <SiCplusplus className="icon icon-cplusplus" /> C++
          </p>

          <h3>Other Tools</h3>
          <p>
            <FaCode className="icon" /> VSCode,
            <SiOracle className="icon" /> OracleDB,
            <SiEclipseide className="icon" /> Eclipse,
            <SiIntellijidea className="icon" /> IntelliJ,
            <SiGit className="icon" /> Git,
            <SiLinux className="icon" /> Linux
          </p>
        </div>

        <div className="profile-experience">
          <h3>Experience</h3>
          <p><strong>Robolink</strong> - Software Engineer</p>
          <p>(2024.11 ~) - Remote Full-time Software Engineer</p>
          <p>(2023.11 ~ 2024.10) - Onsite Intern in San Diego</p>
          <p>(2023.05 ~ 2023.11) - Remote Intern</p>

          <p><strong>Chungnam National University</strong></p>
          <p>(2023.08 - 2023.08) - Python basic training tutor for professors</p>
          <p>(2023.06 - 2023.07) - Computer science thinking class tutor</p>
          <p>(2023.03 - 2023.06) - Programming language introduction class tutor</p>

          <p><strong>λNTS</strong> - Undergraduate Researcher</p>
          <p>(2022.08 - 2023.06) - Static Analysis, Programming Languages</p>

          <p><strong>Purdue University</strong> - K-SW Winter Program</p>
          <p>(2023.01 - 2023.02) - Developed IoT system</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
