import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaRaspberryPi } from "react-icons/fa";
import { SiOracle, SiTypescript, SiPython, SiGo, SiRust, SiSwift, SiSpringboot, SiDart, SiFlutter, SiCplusplus } from "react-icons/si";

import "./Project.css"
import { BlockquoteHTMLAttributes, JSX } from "react";

const languageIcons: Record<string, JSX.Element> = {
  HTML: <FaHtml5 key="html" className="icon html" />,
  CSS: <FaCss3Alt key="css" className="icon css" />,
  JavaScript: <FaJs key="js" className="icon js" />,
  TypeScript: <SiTypescript key="ts" className="icon ts" />,
  React: <FaReact key="react" className="icon react" />,
  NodeJS: <FaNodeJs key="node" className="icon node" />,
  Java: <FaJava key="java" className="icon java" />,
  "Spring Boot": <SiSpringboot key="springboot" className="icon springboot" />,
  Python: <SiPython key="python" className="icon python" />,
  Go: <SiGo key="go" className="icon go" />,
  Rust: <SiRust key="rust" className="icon rust" />,
  Swift: <SiSwift key="swift" className="icon swift" />,
  RaspberryPi: <FaRaspberryPi key="raspberrypi" className="icon raspberrypi" />,
  CPlusPlus: <SiCplusplus key="cpp" className="icon cpp" />,
  Dart: <SiDart key="dart" className="icon dart" />,
  Flutter: <SiFlutter key="flutter" className="icon flutter" />,
  Oracle: <SiOracle key="oracle" className="icon oracle" />
};


interface ProjectCardProps {
  imageUrl: string;
  projectName: string;
  languages: string[];
  link: string;
  contribution: string;
  hideLink: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, projectName, languages, link, contribution, hideLink }) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={imageUrl} alt={projectName} />
        {!hideLink && (
          <div className="project-card-link">
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        )}
      </div>
      <div className="project-card-content">
        <h3>{projectName}</h3>
        <div className="language-icons">
          {languages.map((lang) => (
            <div key={lang} className="icon-wrapper">
              {languageIcons[lang]}
            </div>
          ))}
        </div>
        <p>{contribution}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
