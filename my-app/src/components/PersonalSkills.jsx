import { useState } from "react";
import { AccordionInner, AccordionFlex,  TitleStyle, ToggleStyle, ContentStyle } from "./style/SkillsStyle"; 

export default function PersonalSkills({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionInner className="accordion-item">
      <AccordionFlex className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <TitleStyle>{title}</TitleStyle>
        <ToggleStyle>{isActive ? "-" : "+"}</ToggleStyle>
      </AccordionFlex>
      {isActive && <ContentStyle className="accordion-content">{content}</ContentStyle>}
    </AccordionInner>  
  )
};