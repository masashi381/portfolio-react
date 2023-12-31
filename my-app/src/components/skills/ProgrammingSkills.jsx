import { GridContainer } from "./SkillsStyle";

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
			<i className="fas fa-database"></i>
				<p>postgresql & mongo DB </p>
			</div>
		</GridContainer>
	);
}
