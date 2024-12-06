import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function SkillsSection() {

    const {data, currentLanguage} = useContext(LanguageContext);

    const skills = data.en.skills.apps;
    const title = data?.[currentLanguage]?.skills?.title || "Skills";

  return (
    <div className=" skills-container pt-[80px] pb-[80px] dark:bg-[#252128]">
        <div className="skills flex my-0 mx-auto max-w-[1000px] justify-between">
            <h1 className="text-secondary dark:text-primary text-[48px] font-bold">{title}</h1>
            <div className="skill-grid grid grid-cols-2 gap-y-12 gap-x-36">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item flex items-center gap-[15px]">
                        <div className="skill-icon w-[120px] h-[120px] flex justify-center items-center	overflow-hidden rounded-[6px]">
                            <img className="w-full	h-full object-cover" src={skill.icon} alt={`${skill.name} icon`} />
                        </div>
                        <span className="skill-name text-[#777777] dark:text-white text-[24px] font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SkillsSection;
