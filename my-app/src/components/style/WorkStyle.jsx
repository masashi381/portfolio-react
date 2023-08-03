import styled from "styled-components";

export const WorkContainer = styled.div`
  width: 80vw;
  height: 80vh;
  margin: 0 auto;
  h3 {
  font-family: "Mynerve", cursive;
  font-size: 3rem;
  color: rgb(106, 109, 113);
  text-align: center;
  margin: 3rem 0;
  }
`;

// export const Accordion = styled.div`
  
// `;

// WorkAccordionStyles

export const AccordionInner = styled.div`
  background-color: rgb(106, 109, 113);
  color: rgb(255, 255, 255);
  display: block;
  margin-bottom: 0.1rem;
  padding: .1rem;
  font-size: 1.8rem;
`;

export const AccordionFlex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const TitleStyle = styled.div`
  display: block;
  margin-bottom: 0.1rem;
  padding: 1rem;
  font-size: 1.8rem;
`
export const ToggleStyle = styled.div`
margin-right: 1rem;
`
export const ContentStyle = styled.div`
  height: 30rem;
  white-space: pre-line;
  background-color: white;
  color: rgb(106, 109, 113);
  padding: 1rem;
`