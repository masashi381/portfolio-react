import { GridContainer } from "./SkillsStyle";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
export default function ProgrammingSkills() {
  return (
    <GridContainer>
      <div className="item1 items">
        <i className="fa-brands fa-html5"></i>
        <p>HTML5</p>
      </div>
      <div className="item2 items">
        <i className="fa-brands fa-css3-alt"></i>
        <p>CSS3</p>
      </div>
      <div className="item3 items">
        <i className="fa-brands fa-sass"></i>
        <p>SASS</p>
      </div>
      <div className="item4 items">
        <i className="fa-brands fa-github"></i>
        <p>Github</p>
      </div>
      <div className="item5 items">
        <i className="fa-brands fa-js"></i>
        <p>JavaScript</p>
      </div>
      <div className="item6 items">
        <i className="fa-brands fa-react"></i>
        <p>React</p>
      </div>
      <div className="item7 items">
        <i className="fab fa-node"></i>
        <p>Node.js </p>
      </div>
      <div className="item8 items">
        <DiPostgresql size={50} />
        <p>postgresql </p>
      </div>
      <div className="item9 items">
        <DiMongodb size={50} />
        <p> mongo DB </p>
      </div>
      <div className="item10 items">
        <RiNextjsFill size={50} />
        <p>Next.js </p>
      </div>
      <div className="item11 items">
        <SiTypescript size={50} />
        <p>typeScript </p>
      </div>
      <div className="item12 items">
        <FaFigma size={50} />
        <p>Figma </p>
      </div>
      <div className="item13 items">
        <RiTailwindCssFill size={50} />
        <p>Tailwind </p>
      </div>
      <div className="item14 items">
        <SiShadcnui size={50} />
        <p>Shadcn </p>
      </div>
      <div className="item15 items">
        <SiDaisyui size={50} />
        <p>daisyUI</p>
      </div>
      <div className="item16 items">
        <SiMui size={50} />
        <p>MUI</p>
      </div>
    </GridContainer>
  );
}
