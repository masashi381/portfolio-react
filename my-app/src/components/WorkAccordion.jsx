import { useState } from "react";
import { AccordionInner, AccordionFlex,TitleStyle, ToggleStyle, ContentStyle } from "./style/WorkStyle";

export default function WorkAccordion({ workTitle, workContent }) {
  const [isWorkActive, setIsWorkActive] = useState(false);
  return (
  <AccordionInner className="accordion-item">
      <AccordionFlex className="accordion-title" onClick={() => setIsWorkActive(!isWorkActive)}>
        <TitleStyle>{workTitle}</TitleStyle>
        <ToggleStyle>{isWorkActive ? "-" : "+"}</ToggleStyle>
      </AccordionFlex>
      {isWorkActive && <ContentStyle className="accordion-content">{workContent}</ContentStyle>}
    </AccordionInner>  
  )
};