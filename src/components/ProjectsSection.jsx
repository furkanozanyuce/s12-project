import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function ProjectsSection() {

    const { data, currentLanguage } = useContext(UserContext);

    const title = data?.[currentLanguage]?.project?.title;
    const projects = data?.[currentLanguage]?.project?.projects;


    return (
        <div className="projects-container bg-primary dark:bg-[#1A210B]">
            <div className="projects">
                <h1 className="text-secondary dark:text-primary">{title}</h1>
                <div className="project">
                    {projects.map((proj, i) => (
                        <div className="project2">
                            <img className="project-image" src={proj.image} />
                            <div className="actual-project bg-white dark:bg-[#2B2727] dark:text-white">
                                <h2 className="text-secondary dark:text-[#C1BAED]">{proj.name}</h2>
                                <p>{proj.par}</p>
                                <div className="skill-container">
                                    {proj.skills.map((skill, i) => (
                                        <span className="project-skill bg-secondary text-white dark:bg-[#8173DA]">{skill.skill}</span>
                                    ))}
                                </div>
                                <div className="project-links text-[#120B39] dark:text-primary">
                                    {proj.links.map((link, i) => (
                                        <a href="#">{link.link}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;
