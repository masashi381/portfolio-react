import { HeaderStyle, HeaderLinkStyle } from "./style/HeaderStyle";

export default function Header({ passSkills, getSkills}){
  const skillClickedHandler = () => {
    getSkills.current.scrollIntoView();
  };
  return (
    <HeaderStyle>
      <nav>
        <ul>
          <li><HeaderLinkStyle to="/">home</HeaderLinkStyle></li>
          <li><HeaderLinkStyle to="/about">About</HeaderLinkStyle></li>
          <li><HeaderLinkStyle to="/#projects">Projects</HeaderLinkStyle></li>
          <li><HeaderLinkStyle to="/#skills" onClick={skillClickedHandler} ref={passSkills}>Skills</HeaderLinkStyle></li>
          <li><HeaderLinkStyle to="/work">Work Experience</HeaderLinkStyle></li>
          <li><HeaderLinkStyle to="/contacts">Contacts</HeaderLinkStyle></li>
        </ul>
      </nav>
    </HeaderStyle>
  )
};