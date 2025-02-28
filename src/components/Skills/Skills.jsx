import React, { useState } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard/SkillCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
import { SKILLS } from "../../utils/data";

const Skills = () => {
  const skillsData = typeof SKILLS === "function" ? SKILLS() : SKILLS; // Garante que SKILLS seja um array
  const [selectedSkill, setSelectedSkill] = useState(skillsData?.[0] || null);

  return (
    <section id="skills" className="skills-container">
      <h5>Proficiência Técnica</h5>

      <div className="skills-content">
        <div className="skills">
          {skillsData.length > 0 ? (
            skillsData.map((item) => (
              <SkillCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill?.title === item.title}
                onClick={() => setSelectedSkill(item)}
              />
            ))
          ) : (
            <p>Nenhuma habilidade disponível.</p>
          )}
        </div>

        {selectedSkill && (
          <div className="skills-info">
            <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
