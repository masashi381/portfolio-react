import React from 'react';
import Home from "./Home";
import About from "./About";
import Projects from './Projects';
import Skills from './Skills';
import Work from './Work';
import Contacts from "./Contacts";
import NotFound from './NotFound';
import { Routes, Route} from 'react-router-dom';

export default function Main(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>       
      <Projects/>
      <Skills/>
    </>
  )
}