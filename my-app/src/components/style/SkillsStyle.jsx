import styled from "styled-components";

export const SkillsTitle = styled.h3`
  font-family: "Mynerve", cursive;
  font-size: 3rem;
  color: rgb(106, 109, 113);
  text-align: center;
`

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
`

// PersonalSkills

export const AccordionInner = styled.div`
  width: 40vw;
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
`;

export const TitleStyle = styled.div`
  display: block;
  margin-bottom: 0.1rem;
  padding: 1rem;
  font-size: 1.8rem;
`;

export const ToggleStyle = styled.div`
margin-right: 1rem;
`;

export const ContentStyle = styled.div`
  width: 40vw;
  height: 10rem;
  white-space: pre-line;
  background-color: white;
  color: rgb(106, 109, 113);
  padding: 1rem;
`;

// ProgrammingSkills

export const GridContainer = styled.div`
  width: 40vw;
  display: grid;
  grid-template: repeat(1, 1fr)/repeat(6, 1fr);
  grid-template-areas:
      "item1 item1 item2 item2 item3 item3"
      "item4 item4 item5 item5 item6 item6";
  row-gap: 2rem;
`;

export const Grid1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: item1;
  i {
    font-size: 5rem;
    color: rgb(106, 109, 113);
  }
  p {
    text-align: center;
    font-size: 1.4rem;
    padding: 0.5rem 0;
    color: rgb(106, 109, 113);
  }
`;

export const Grid2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: item2;
  i {
    font-size: 5rem;
    color: rgb(106, 109, 113);
  }
  p {
    text-align: center;
    font-size: 1.4rem;
    padding: 0.5rem 0;
    color: rgb(106, 109, 113);
  }
`;

export const Grid3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: item3;
  i {
    font-size: 5rem;
    color: rgb(106, 109, 113);
  }
  p {
    text-align: center;
    font-size: 1.4rem;
    padding: 0.5rem 0;
    color: rgb(106, 109, 113);
  }
`;

export const Grid4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: item4;
  i {
    font-size: 5rem;
    color: rgb(106, 109, 113);
  }
  p {
    text-align: center;
    font-size: 1.4rem;
    padding: 0.5rem 0;
    color: rgb(106, 109, 113);
  }
`;

export const Grid5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: item5;
  i {
    font-size: 5rem;
    color: rgb(106, 109, 113);
  }
  p {
    text-align: center;
    font-size: 1.4rem;
    padding: 0.5rem 0;
    color: rgb(106, 109, 113);
  }
`;

export const Grid6 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: item6;
  i {
    font-size: 5rem;
    color: rgb(106, 109, 113);
  }
  p {
    text-align: center;
    font-size: 1.4rem;
    padding: 0.5rem 0;
    color: rgb(106, 109, 113);
  }
`;