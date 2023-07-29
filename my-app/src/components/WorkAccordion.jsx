import { useState } from "react";

export default function WorkAccordion({ workTitle, workContent }) {
  const [isWorkActive, setIsWorkActive] = useState(false);
  return (
  <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsWorkActive(!isWorkActive)}>
        <div>{workTitle}</div>
        <div>{isWorkActive ? "-" : "+"}</div>
      </div>
      {isWorkActive && <div className="accordion-content">{workContent}</div>}
    </div>  
  )
};