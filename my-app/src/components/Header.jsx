import { Link } from "react-router-dom";

export default function Header(){
  return (
    <nav>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="#projects">Projects</Link></li>
        <li><Link to="#skills">Skills</Link></li>
        <li><Link to="/work">Work Experience</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  )
};