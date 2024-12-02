import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function SkillsSection() {

    const {data, currentLanguage} = useContext(UserContext);

    const skills = data.en.skills.apps;
    const title = data?.[currentLanguage]?.skills?.title || "Skills";

  return (
    <div className="skills">
        <h1 className="text-secondary">{title}</h1>
        <div className="skill-grid">
            {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                    <div className="skill-icon">
                        <img src={skill.icon} alt={`${skill.name} icon`} />
                    </div>
                    <span className="skill-name text-[#777777]">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SkillsSection;
