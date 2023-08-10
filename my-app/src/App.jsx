import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import { useRef } from 'react';


function App() {
  const passSkills = useRef(null);
  const getSkills = useRef(null);
  const passProjects = useRef(null);
  const getProjects = useRef(null);

  return (
    <>
      <Header passSkills={passSkills} getSkills={getSkills} passProjects={passProjects} getProjects={getProjects}/>
      <Main getSkills={getSkills} getProjects={getProjects}/>
    </>
  )
}

export default App
