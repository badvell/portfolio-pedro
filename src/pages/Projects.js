import { ProjectItem } from "../component/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import '../styles/Projects.css';

export const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, key) => {
          return <ProjectItem name={project.name} image={project.image} id={key} key={key} />;
        })}
      </div>
    </div>
  );
};
