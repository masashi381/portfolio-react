import { HamburgerStyle } from "./HeaderStyle";

export default function ToggleBtn(props) {
	return (
		<HamburgerStyle
			type="button"
			aria-controls={props.controls}
			aria-expanded={props.open}
			onClick={props.onClick}
			className="toggleBtn"
		>
			<span className="line-1 line"></span>
			<span className="line-2 line"></span>
			<span className="line-3 line"></span>
		</HamburgerStyle>
	);
}
