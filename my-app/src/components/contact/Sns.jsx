import { OptionsStyle, IconsStyle } from "./ContactStyle";

export default function Sns() {
	return (
		<OptionsStyle>
			<p>
				Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear
				from you. Simply fill the from and send me an email.
			</p>
			<div>
				<IconsStyle to="https://www.instagram.com/marcy.387" target="_blank">
					<i className="fa-brands fa-instagram fa-lg"></i>
				</IconsStyle>
				<IconsStyle to="https://www.facebook.com/masashi.sawada.796/" target="_blank">
					<i className="fa-brands fa-facebook fa-lg"></i>
				</IconsStyle>
				<IconsStyle to="https://github.com/masashi381" target="_blank">
					<i className="fa-brands fa-github fa-lg"></i>
				</IconsStyle>
				<IconsStyle to="https://www.linkedin.com/in/masashi-sawada-731705265/" target="_blank">
					<i className="fa-brands fa-linkedin fa-lg"></i>
				</IconsStyle>
				<IconsStyle target="_blank">
					<i className="fa-brands fa-whatsapp fa-lg"></i>
				</IconsStyle>
			</div>
		</OptionsStyle>
	);
}
