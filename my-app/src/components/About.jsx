import React from 'react';
import styled from "styled-components"


const AboutContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem;
`
const ImgStyle = styled.img`
  width: 30vw;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 5rem;
`
const AboutDescStyle = styled.p`
  width: 40vw;
    margin: 0 auto;
    font-size: 1.6rem;
`

export default function About(){
  return(
    <AboutContainer>
      <ImgStyle src="../src/images/3b631c2e-bfcb-4c2f-8145-fbd6e9c3efc9.jpg" alt="my picture" />
      <AboutDescStyle>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis laudantium nam velit asperiores nihil doloremque eveniet ullam omnis. Velit veritatis iure deleniti incidunt, possimus dolorum veniam unde sequi ea?</AboutDescStyle>
    </AboutContainer>
  )
};