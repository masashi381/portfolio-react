import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
export default function HomeContainer({ getSkills }){
  return(
    <div>
      <Home/>
      <Projects/>
      <Skills getSkills={getSkills}/>
    </div>
  )
};