import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import { useRef } from 'react';


function App() {
  const passSkills = useRef(null);
  const getSkills = useRef(null);

  return (
    <>
      <Header passSkills={passSkills} getSkills={getSkills}/>
      <Main getSkills={getSkills}/>
    </>
  )
}

export default App
