import React from 'react';
import { AboutContainer, ImgStyle, AboutInner, MiniTitle, Detail, HobbyTitle, Items, HikeIcon, MovieIcon, BookIcon, TravelIcon, GymIcon, TennisIcon } from "./style/AboutStyle";

export default function About(){
  return(
    <AboutContainer>
      <ImgStyle src="../src/images/3b631c2e-bfcb-4c2f-8145-fbd6e9c3efc9.jpg" alt="my picture" />
      <div>
        <MiniTitle>Hello, I am <strong>Masashi Sawada</strong> located in Vancouver.</MiniTitle>
        <Detail>I am Studying Web Development in Cornerstone International community College . I am highly interested in React.js.</Detail>
        <div>
          <HobbyTitle>A part from coding,  some other activities that I love to do</HobbyTitle>
          <Items>
            <li><TennisIcon className="fa-solid fa-table-tennis-paddle-ball"></TennisIcon>tennis</li>
            <li><HikeIcon className="fa-solid fa-person-hiking"></HikeIcon>hiking</li>
            <li><MovieIcon className="fa-solid fa-film"></MovieIcon>movie</li>
            <li><BookIcon className="fa-solid fa-book"></BookIcon>books</li>
            <li><TravelIcon className="fa-solid fa-suitcase"></TravelIcon>traveling</li>
            <li><GymIcon className="fa-solid fa-dumbbell"></GymIcon>Gym</li>
          </Items>
        </div>
      </div>
    </AboutContainer>
  )
};