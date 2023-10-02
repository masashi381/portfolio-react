import React from "react";
import { AboutContainer } from "./AboutStyle";

export default function About() {
	return (
		<AboutContainer>
			<img src="../public/3b631c2e-bfcb-4c2f-8145-fbd6e9c3efc9.jpg" alt="my picture" />
			<div className="aboutInner">
				<p className="miniTitle">
					Hello, I am <strong>Masashi Sawada</strong> located in Vancouver.
				</p>
				<p className="detail">
					I am Studying Web Development in Cornerstone International community College . I am highly
					interested in React.js.
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
