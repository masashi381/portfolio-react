import React from 'react';
import HomeContainer from "./HomeContainer";
import About from "./About";
import Work from './Work';
import Contacts from "./Contacts";
import NotFound from './NotFound';
import { Routes, Route} from 'react-router-dom';


export default function Main({ getSkills }){
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeContainer getSkills={getSkills}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>     
    </>
  )
}