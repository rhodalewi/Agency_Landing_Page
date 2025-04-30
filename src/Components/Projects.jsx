import { ProjectsData } from "../data";

function Projects() {
    return (
        <section className="projects">
            {ProjectsData.map(project => (
                    
                <div key={project.id} className="project_img">
                    <picture>
                        <source media="(max-width: 768px)" srcSet={project.mobileImg} />
                        <img src={project.desktopImg} alt={project.alt}  />
                    </picture>
                    
                </div>
            ))}
        </section>
    )
}

export default Projects;