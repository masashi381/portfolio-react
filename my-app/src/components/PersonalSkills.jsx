import { useState } from "react";
import { AccordionInner } from "./style/SkillsStyle";

export default function PersonalSkills({ title, content }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<AccordionInner className="accordion-item">
			<div className="accordion-title" onClick={() => setIsActive(!isActive)}>
				<h3>{title}</h3>
				<div className="toggle">{isActive ? "-" : "+"}</div>
			</div>
			{isActive && <div className="accordion-content">{content}</div>}
		</AccordionInner>
	);
}
