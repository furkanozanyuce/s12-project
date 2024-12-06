import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function ProjectsSection() {

    const { data, currentLanguage } = useContext(UserContext);

    const title = data?.[currentLanguage]?.project?.title;
    const projects = data?.[currentLanguage]?.project?.projects;


    return (
        <div className="projects-container pt-[80px] pb-[80px] bg-primary dark:bg-[#1A210B]">
            <div className="projects flex my-0 mx-auto max-w-[1000px] flex-col justify-between gap-[20px]">
                <h1 className="text-secondary dark:text-primary text-[48px] font-bold">{title}</h1>
                <div className="project flex flex-col gap-[40px]">
                    {projects.map((proj, i) => (
                        <div className="project2 flex">
                            <img className="project-image w-[360px] h-[360px] rounded-tl-xl rounded-bl-xl object-cover object-[0] border-r border-r-[#D2D2D2]" src={proj.image} />
                            <div className="actual-project rounded-tr-xl rounded-br-xl flex flex-col gap-[20px] justify-center p-[40px] bg-white dark:bg-[#2B2727] dark:text-white">
                                <h2 className="text-secondary dark:text-[#C1BAED] text-[32px] font-bold">{proj.name}</h2>
                                <p className="leading-[22px] text-[18px]">{proj.par}</p>
                                <div className="skill-container flex gap-[20px]">
                                    {proj.skills.map((skill, i) => (
                                        <span className="project-skill px-5 py-1.5 rounded-[23px] bg-secondary text-white dark:bg-[#8173DA]">{skill.skill}</span>
                                    ))}
                                </div>
                                <div className="project-links font-medium underline flex gap-[40px] text-[#120B39] dark:text-primary">
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
