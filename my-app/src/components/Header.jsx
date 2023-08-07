import { Link } from "react-router-dom";
import { HeaderStyle, HeaderLinkStyle } from "./style/HeaderStyle";

export default function Header(){
  return (
    <HeaderStyle>
      <nav>
        <ul>
          <li><HeaderLinkStyle to="/">home</HeaderLinkStyle></li>
          <li><HeaderLinkStyle to="/about">About</HeaderLinkStyle></li>
          <li><HeaderLinkStyle to="/#projects">Projects</HeaderLinkStyle></li>
          <li><HeaderLinkStyle to="/#skills">Skills</HeaderLinkStyle></li>
          <li><HeaderLinkStyle to="/work">Work Experience</HeaderLinkStyle></li>
          <li><HeaderLinkStyle to="/contacts">Contacts</HeaderLinkStyle></li>
        </ul>
      </nav>
    </HeaderStyle>
  )
};