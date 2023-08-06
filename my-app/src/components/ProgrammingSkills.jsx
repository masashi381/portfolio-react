import { GridContainer, Grid1, Grid2, Grid3, Grid4, Grid5, Grid6 } from "./style/SkillsStyle";

export default function ProgrammingSkills() {
  return (
    <GridContainer>
      <Grid1>
        <i className="fa-brands fa-html5"></i>
        <p>HTML5</p>
      </Grid1>
      <Grid2>
        <i className="fa-brands fa-css3-alt"></i>
        <p>CSS3</p>
      </Grid2>
      <Grid3>
        <i className="fa-brands fa-sass"></i>
        <p>SASS</p>
      </Grid3>
      <Grid4>
        <i class="fa-brands fa-github"></i>
        <p>Github</p>
      </Grid4>
      <Grid5>
        <i className="fa-brands fa-js"></i>
        <p>JavaScript</p>
      </Grid5>
      <Grid6>
        <i className="fa-brands fa-react"></i>
        <p>React</p>
      </Grid6>
    </GridContainer>
  )
};