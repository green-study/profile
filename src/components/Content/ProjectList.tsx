import ProjectCard from './ProjectCard';

interface Project {
  imageUrl: string;
  projectName: string;
  languages: string[];
  link: string;
  contribution: string;
  hideLink: boolean;
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
          languages={project.languages}
          link={project.link}
          contribution={project.contribution}
          hideLink={project.hideLink}
        />
      ))}
    </div>
  );
};

export default ProjectList;
