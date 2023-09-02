import React from "react";
import { HomeContainer, LinkStyle } from "./HomeStyle";

export default function Home() {
	return (
		<HomeContainer>
			{/* title */}
			<div>
				<h1>Masashi Sawada</h1>
				<h2>This is my portfolio</h2>
			</div>
			{/* SNS */}
			<div>
				<LinkStyle to="https://www.instagram.com/marcy.387" target="_blank">
					<i className="fa-brands fa-instagram fa-lg"></i>
				</LinkStyle>
				<LinkStyle to="https://github.com/masashi381" target="_blank">
					<i className="fa-brands fa-github fa-lg"></i>
				</LinkStyle>
			</div>
		</HomeContainer>
	);
}
