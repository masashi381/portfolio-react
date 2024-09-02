import { HeaderLinkStyle } from "./HeaderStyle";
import PropTypes from "prop-types";

export default function Nav({ id, open, onClick, getSkills, getProjects, passProjects, passSkills }) {
  const skillClickedHandler = () => {
    getSkills.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const projectsClickedHandler = () => {
    getProjects.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <nav id={id} aria-hidden={!open} className="navigation" onClick={onClick}>
      <ul>
        <li>
          <HeaderLinkStyle to="/">home</HeaderLinkStyle>
        </li>
        <li>
          <HeaderLinkStyle to="/about">About</HeaderLinkStyle>
        </li>
        <li>
          <HeaderLinkStyle to="/#projects" onClick={projectsClickedHandler} ref={passProjects}>
            Projects
          </HeaderLinkStyle>
        </li>
        <li>
          <HeaderLinkStyle to="/#skills" onClick={skillClickedHandler} ref={passSkills}>
            Skills
          </HeaderLinkStyle>
        </li>
        <li>
          <HeaderLinkStyle to="/work">Work Experience</HeaderLinkStyle>
        </li>
        <li>
          <HeaderLinkStyle to="/contacts">Contacts</HeaderLinkStyle>
        </li>
      </ul>
    </nav>
  );
}
Nav.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  getSkills: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  getProjects: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  passProjects: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  passSkills: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};
