import { HeaderStyle } from "./HeaderStyle";
import { useState } from "react";
import Nav from "./Nav";
import ToggleBtn from "./ToggleBtn";
export default function Header(props) {
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
				passSkills={props.passSkills}
				getSkills={props.getSkills}
				passProjects={props.passProjects}
				getProjects={props.getProjects}
				onClick={clickHandler}
			/>
		</HeaderStyle>
	);
}
