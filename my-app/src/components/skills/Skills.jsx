import PersonalSkills from "./PersonalSkills";
import ProgrammingSkills from "./ProgrammingSkills";
import { accordionData } from "../data/AccordionData";
import { SkillsContainer } from "./SkillsStyle";

export default function Skills({ getSkills }) {
	return (
		<SkillsContainer id="skills" ref={getSkills}>
			<h3>Skills</h3>
			<div className="skillsInner">
				<div className="accordion">
					{accordionData.map(({ title, content }, index) => (
						<PersonalSkills key={index} title={title} content={content} />
					))}
				</div>
				<ProgrammingSkills />
			</div>
		</SkillsContainer>
	);
}
