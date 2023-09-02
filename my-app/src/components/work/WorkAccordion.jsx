import { useState } from "react";
import { AccordionInner } from "./WorkStyle";

export default function WorkAccordion({ workTitle, workContent }) {
	const [isWorkActive, setIsWorkActive] = useState(false);
	return (
		<AccordionInner className="accordion-item">
			<div className="accordion-title" onClick={() => setIsWorkActive(!isWorkActive)}>
				<h3>{workTitle}</h3>
				<div className="accordion-btn">{isWorkActive ? "-" : "+"}</div>
			</div>
			{isWorkActive && <div className="accordion-content">{workContent}</div>}
		</AccordionInner>
	);
}
