import { ReactElement } from "react";
import ProjectList from "./ProjectList";
import Profile from "./Profile";
import "./Content.css"

const projects = [
    {
        imageUrl: 'profile_project.png',
        projectName: 'Web Portfolio',
        languages: ['React', 'TypeScript', 'CSS'],
        link: 'https://github.com/green-study/profile',
        contribution: 'Developed frontend UI and deployed the project on GitHub',
        hideLink: false,
    },
    {
        imageUrl: 'blockly_project.png',
        projectName: 'Robolink Blockly Website',
        languages: ['React', 'JavaScript', 'CSS'],
        link: 'https://codrone.robolink.com/edu/blockly/',
        contribution: 'Fixed frontend bugs on the site and implemented new features',
        hideLink: false,
    },
    {
        imageUrl: 'docs_project.png',
        projectName: 'Robolink Docs Website',
        languages: ['HTML', 'JavaScript', 'CSS'],
        link: 'https://docs.robolink.com/',
        contribution: 'Led the overall frontend development using Docusaurus',
        hideLink: false,
    },
    {
        imageUrl: 'scoreboard_project.png',
        projectName: 'Robolink Scoreboard',
        languages: ['Spring Boot', 'Java', 'HTML', 'JavaScript', 'CSS'],
        link: '',
        contribution: 'Developed a full-stack scoreboard to display user experience scores',
        hideLink: true,
    },
    {
        imageUrl: 'JNI_project.png',
        projectName: 'JNIwiz: static analysis',
        languages: ['CPlusPlus', 'Java'],
        link: 'https://github.com/green-study/JNIwiz',
        contribution: 'Automated JNI header generation to prevent Java-C/C++ errors',
        hideLink: false,
    },
    {
        imageUrl: 'IoT_project.png',
        projectName: 'Dog Bowel Pad Training IoT',
        languages: ['RaspberryPi', 'CPlusPlus', 'Python'],
        link: 'https://www.youtube.com/watch?v=o8msyWNerZ0',
        contribution: 'IoT-based dog training system with sensors and Bluetooth',
        hideLink: false,
    },
    {
        imageUrl: 'reink_project.png',
        projectName: 'Re:ink',
        languages: ['Flutter', 'Dart'],
        link: 'https://www.youtube.com/watch?v=V4V0-kYJyqc',
        contribution: 'Led UI-focused Flutter app development',
        hideLink: false,
    }
];

const pc_projects = [
    {
        imageUrl: 'Ieee.png',
        projectName: 'Publication: Dog Bowel Pad Training IoT',
        languages: ['RaspberryPi', 'CPlusPlus', 'Python'],
        link: 'https://ieeexplore.ieee.org/document/10393480/',
        contribution: 'IEEE 논문 출판 (2023년 10월)',
        hideLink: false,
    },
    {
        imageUrl: 'sqld.png',
        projectName: 'Certification: SQLD',
        languages: ['Oracle'],
        link: '',
        contribution: 'SQLD 자격증 (한국데이터산업진흥원, 2022년 6월)',
        hideLink: true,
    }
];

const Content = (): ReactElement => {
    return (
        <div className="content">
            <div className="profile-field">
                <div className="field-title">
                    <p>About me</p>
                </div>
                <Profile />
            </div>
            <div className="project-field">
                <div className="field-title">
                    <p>Project List</p>
                </div>
                <ProjectList projects={projects} />
            </div>
            <div className="publications-certifications-field">
                <div className="field-title">
                    <p>Publications & Certifications</p>
                </div>
                <ProjectList projects={pc_projects} />
            </div>
            <div className="footer">
            </div>
        </div>
    );
};

export default Content;