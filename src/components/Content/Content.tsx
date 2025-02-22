import { ReactElement } from "react";
import ProjectList from "./ProjectList";
import "./Content.css"

const projects = [
    {
        imageUrl: 'profile_project.png',
        projectName: 'Web Portfolio',
        languages: ['React', 'TypeScript', 'CSS'],
        link: 'https://green-study.github.io/profile/',
        contribution: 'Developed frontend UI and deployed the project on GitHub',
    },
    {
        imageUrl: 'blockly_project.png',
        projectName: 'Robolink Blockly Website',
        languages: ['React', 'JavaScript', 'CSS'],
        link: 'https://codrone.robolink.com/edu/blockly/',
        contribution: 'Fixed frontend bugs on the site and implemented new features',
    },
    {
        imageUrl: 'docs_project.png',
        projectName: 'Robolink Docs Website',
        languages: ['HTML', 'JavaScript', 'CSS'],
        link: 'https://docs.robolink.com/',
        contribution: 'Led the overall frontend development using Docusaurus',
    },
    {
        imageUrl: 'scoreboard_project.png',
        projectName: 'Robolink Scoreboard',
        languages: ['Spring Boot', 'Java', 'HTML', 'JavaScript', 'CSS'],
        link: '',
        contribution: 'Developed a full-stack scoreboard to display user experience scores',
    },
    {
        imageUrl: 'JNI_project.png',
        projectName: 'JNIwiz: static analysis',
        languages: ['CPlusPlus', 'Java'],
        link: 'https://github.com/green-study/JNIwiz',
        contribution: 'Automated JNI header generation to prevent Java-C/C++ errors',
    },
    {
        imageUrl: 'IoT_project.png',
        projectName: 'Dog Bowel Pad Training IoT',
        languages: ['RaspberryPi', 'CPlusPlus', 'Python'],
        link: 'https://www.youtube.com/watch?v=o8msyWNerZ0',
        contribution: 'IoT-based dog training system with sensors and Bluetooth',
    },
    {
        imageUrl: 'reink_project.png',
        projectName: 'Re:ink',
        languages: ['Flutter', 'Dart'],
        link: 'https://www.youtube.com/watch?v=V4V0-kYJyqc',
        contribution: 'Led UI-focused Flutter app development',
    }
];

const Content = (): ReactElement => {
    return (
        <div className="content">
            <div className="project-field">
                <div className="project-title">
                    <p>Project List</p>
                </div>
                <ProjectList projects={projects} />
            </div>
        </div>
    );
};

export default Content;