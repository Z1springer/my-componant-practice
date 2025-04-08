import { projects } from "../data/data";
import ProjectCard from "./ProjectCard.jsx"
function Project() {
    return (
        <>
            <h1>Projects</h1>
            <div>
                {
                    projects.map(project => (
                        <ProjectCard
                            title={project.title}
                            class={project.class}
                            year={project.year}
                        />
                    ))
                }
            </div>
        </>
    )
};

export default Project;