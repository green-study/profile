import ProjectCard from './ProjectCard';

interface Project {
  imageUrl: string;
  projectName: string;
  date: String;
  languages: string[];
  link1: string;
  link2: string;
  contribution: string[];
  hideLink1: boolean;
  buttonText1: string;
  hideLink2: boolean;
  buttonText2: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imageUrl={project.imageUrl}
          projectName={project.projectName}
          date={project.date}
          languages={project.languages}
          link1={project.link1}
          link2={project.link2}
          contribution={project.contribution}
          hideLink1={project.hideLink1}
          buttonText1={project.buttonText1}
          hideLink2={project.hideLink2}
          buttonText2={project.buttonText2}
        />
      ))}
    </div>
  );
};

export default ProjectList;
