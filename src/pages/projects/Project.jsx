import { useState } from "react";
import { ProjectCard } from "../../components/projectcard/ProjectCard";
import { projectData } from "../../data/project";
const Projects = () => {
  const [project, setProject] = useState(projectData);
  console.log(project);
  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">Personal Projects</h1>
        </div>
        <div className="achievement-cards-div">
          {project.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Projects };
