import Home from "./Home";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import PropTypes from "prop-types";

export default function HomeContainer({ getSkills, getProjects }) {
  return (
    <div>
      <Home />
      <Projects getProjects={getProjects} />
      <Skills getSkills={getSkills} />
    </div>
  );
}
HomeContainer.propTypes = {
  getSkills: PropTypes.shape({
    current: PropTypes.any,
  }),
  getProjects: PropTypes.shape({
    current: PropTypes.any,
  }),
};
