import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
export default function HomeContainer({ getSkills, getProjects }){
  return(
    <div>
      <Home/>
      <Projects getProjects={getProjects}/>
      <Skills getSkills={getSkills}/>
    </div>
  )
};