import { ProjectContainer, LinkStyle } from "./ProjectStyle";

export default function Projects({ getProjects }) {
	return (
		<ProjectContainer id="projects">
			<h3 ref={getProjects}>Projects</h3>
			<div className="projectsInner">
				<LinkStyle to="https://masashi381.github.io/mid-term-webdev1-masashi381/" target="_blank">
					<img className="portfolio img" src="../public/portfolio.png" alt="portfolio" />
					<p>Portfolio by HTML & CSS</p>
				</LinkStyle>
				<LinkStyle to="https://masashi381.github.io/Remaking-HomePages/" target="_blank">
					<img className="mockup img" src="../public/remakingHomepages.png" alt="Remaking HomePages" />
					<p>Remaking HomePages</p>
				</LinkStyle>
			</div>
		</ProjectContainer>
	);
}
