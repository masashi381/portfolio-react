import { HeaderStyle, HeaderLinkStyle } from "./HeaderStyle";

export default function Header(props) {
	const skillClickedHandler = () => {
		props.getSkills.current.scrollIntoView({
			behavior: "smooth",
		});
	};
	const projectsClickedHandler = () => {
		props.getProjects.current.scrollIntoView({
			behavior: "smooth",
		});
	};
	return (
		<HeaderStyle>
			<nav>
				<ul>
					<li>
						<HeaderLinkStyle to="/">home</HeaderLinkStyle>
					</li>
					<li>
						<HeaderLinkStyle to="/about">About</HeaderLinkStyle>
					</li>
					<li>
						<HeaderLinkStyle to="/#projects" onClick={projectsClickedHandler} ref={props.passProjects}>
							Projects
						</HeaderLinkStyle>
					</li>
					<li>
						<HeaderLinkStyle to="/#skills" onClick={skillClickedHandler} ref={props.passSkills}>
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
		</HeaderStyle>
	);
}
