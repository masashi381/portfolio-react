import { AboutContainer } from "./AboutStyle";
import myImg from "../../../images/3b631c2e-bfcb-4c2f-8145-fbd6e9c3efc9.jpg";

export default function About() {
  return (
    <AboutContainer>
      <img src={myImg} alt="my picture" />
      <div className="aboutInner">
        <p className="miniTitle">
          Hello, I am <strong>Masashi Sawada</strong> located in Vancouver.
        </p>
        <p className="detail">
          Detail oriented full stack developer with 2+ years&#39; experience in building and maintaining scalable web
          appreciations with engaging user interfaces. Currently working as freelance developer on a full stack project
          for a client. I am truly passionate about learning and development with a desire to apply skills in medium to
          large dev teams. Eager to tackle more complex problems and create value and amazing experiences for users.
        </p>
        <div>
          <p className="hobbyTitle">A part from coding, some other activities that I love to do</p>
          <ul>
            <li>
              <i className="fa-solid fa-table-tennis-paddle-ball"></i>tennis
            </li>
            <li>
              <i className="fa-solid fa-person-hiking"></i>hiking
            </li>
            <li>
              <i className="fa-solid fa-film"></i>movie
            </li>
            <li>
              <i className="fa-solid fa-book"></i>books
            </li>
            <li>
              <i className="fa-solid fa-suitcase"></i>traveling
            </li>
            <li>
              <i className="fa-solid fa-dumbbell"></i>Gym
            </li>
          </ul>
        </div>
      </div>
    </AboutContainer>
  );
}
