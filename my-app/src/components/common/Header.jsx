import { HeaderStyle } from "./HeaderStyle";
import { useState } from "react";
import Nav from "./Nav";
import ToggleBtn from "./ToggleBtn";
import PropTypes from "prop-types";
export default function Header({ passSkills, getSkills, passProjects, getProjects }) {
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <HeaderStyle>
      <ToggleBtn open={open} controls="navigation" onClick={clickHandler} />
      <Nav
        id="navigation"
        open={open}
        passSkills={passSkills}
        getSkills={getSkills}
        passProjects={passProjects}
        getProjects={getProjects}
        onClick={clickHandler}
      />
    </HeaderStyle>
  );
}

Header.propTypes = {
  passSkills: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  getSkills: PropTypes.shape({
    current: PropTypes.any,
  }),
  getProjects: PropTypes.shape({
    current: PropTypes.any,
  }),
  passProjects: PropTypes.shape({
    current: PropTypes.any,
  }),
};
