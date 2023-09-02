import Home from "./Home";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
export default function HomeContainer({ getSkills, getProjects }) {
	return (
		<div>
			<Home />
			<Projects getProjects={getProjects} />
			<Skills getSkills={getSkills} />
		</div>
	);
}
