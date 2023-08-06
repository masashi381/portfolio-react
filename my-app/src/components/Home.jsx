import React from 'react';
import { MainTitle, MiniTitle, HomeContainer, LinkStyle } from './style/HomeStyle';

export default function Home(){
  return(
    <HomeContainer>
      {/* title */}
      <div>
        <MainTitle>Masashi Sawada</MainTitle>
        <MiniTitle>This is my portfolio</MiniTitle>
      </div>
      {/* SNS */}
      <div>
        <LinkStyle to="https://www.instagram.com/marcy.387" target="_blank"><i className="fa-brands fa-instagram fa-lg"></i></LinkStyle>
        <LinkStyle to="https://github.com/masashi381" target="_blank"><i className="fa-brands fa-github fa-lg"></i></LinkStyle>
      </div>
    </HomeContainer>
  )
}