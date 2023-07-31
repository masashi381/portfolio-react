import PersonalSkills from "./PersonalSkills";
import ProgrammingSkills from "./ProgrammingSkills";
import { accordionData } from "./data/AccordionData";


export default function Skills() {
  return (
    <div id="skills">
      <h3>Skills</h3>
      <div>
        <div className="accordion">
          {accordionData.map(({title, content}, index) => (
            <PersonalSkills key={index} title={title} content={content}/>
          ))}
        </div>
        <ProgrammingSkills />
      </div>
    </div>
  )
};