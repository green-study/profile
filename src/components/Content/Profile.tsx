import React from "react";
import { FaEnvelope, FaGithub, FaUniversity, FaCode, FaLinkedin, FaJava } from "react-icons/fa";
import { SiOracle, SiEclipseide, SiIntellijidea, SiGit, SiLinux, SiReact, SiJavascript, SiTypescript, SiSpringboot, SiPython, SiCplusplus, SiHtml5, SiCss3} from "react-icons/si";
import "./profile.css";

const Profile: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src="photo.png" alt="Profile" />
        <p className="profile-description name">김수빈</p>
        <p className="profile-description">Front-end Developer</p>
        {/* <p className="profile-description">Passionate about UI/UX & Software Engineering</p> */}
      </div>

      <div className="profile-info">
        <h2>Profile</h2>

        <div className="profile-links">
          <p>
            <FaEnvelope className="icon icon-email" /> Email:{" "}
            <a href="mailto:soo010410@naver.com">soo010410@naver.com</a> |
            <a href="mailto:soo010410@gmail.com">soo010410@gmail.com</a>
          </p>
          <p>
            <FaGithub className="icon" /> Github:{" "}
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
            <FaUniversity className="icon" /> 충남대학교: 컴퓨터융합학부 (2020.3 ~ 2024.2)
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
          <p><strong>Robolink</strong> - San Diego, USA</p>
          <p>(2024.11 ~ ing) - Junior Software Engineer (한국 원격 근무)</p>
          <p>(2023.11 ~ 2024.10) - Software Intern (미국 현지 근무)</p>
          <p>(2023.05 ~ 2023.11) - Software Intern (한국 원격 근무)</p>

          <p><strong>충남대학교</strong> - 대전광역시, 한국</p>
          <p>(2023.08 - 2023.08) - 인문대 교수님 대상 Python 기초 수업 튜터</p>
          <p>(2023.06 - 2023.07) - 컴퓨터 과학적 사고 수업 튜터</p>
          <p>(2023.03 - 2023.06) - 프로그래밍 언어 개론 수업 튜터</p>

          <p><strong>λNTS</strong> - 대전광역시, 한국</p>
          <p>(2022.08 - 2023.06) - 학부 연구생, 정적 분석에 대한 연구 진행</p>

          <p><strong>Purdue University</strong> - West Lafayette, USA</p>
          <p>(2023.01 - 2023.02) - K-SW Winter Program, IoT 제품 개발 및 논문 작성</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
