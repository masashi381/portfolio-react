import PersonalSkills from "./PersonalSkills";
import ProgrammingSkills from "./ProgrammingSkills";
import { accordionData } from "./data/AccordionData";
import { SkillsTitle, SkillsContainer } from "./style/SkillsStyle";


export default function Skills({ getSkills }) {
  return (
    <div id="skills" ref={getSkills}>
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsContainer>
        <div className="accordion">
          {accordionData.map(({title, content}, index) => (
            <PersonalSkills key={index} title={title} content={content}/>
          ))}
        </div>
        <ProgrammingSkills />
      </SkillsContainer>
    </div>
  )
};