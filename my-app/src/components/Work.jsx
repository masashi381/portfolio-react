import WorkAccordion from "./WorkAccordion";
import { workAccordionData } from "./data/WorkAccordionData";
import { WorkContainer } from "./style/WorkStyle";

export default function Work(){
  return(
    <WorkContainer>
      <h3>Work</h3>
      <div>
        <div className="accordion">
          {workAccordionData.map(({workTitle, workContent}, index) => (
            <WorkAccordion key={index} workTitle={workTitle} workContent={workContent}/>
          ))}
        </div>
      </div>
    </WorkContainer>
  )
};