import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProjectContainer = styled.div`
	height: 80vh;
	h3 {
		font-family: "Mynerve", cursive;
		font-size: 3rem;
		color: rgb(106, 109, 113);
		text-align: center;
		margin-bottom: 5rem;
	}
	.projectsInner {
		display: flex;
		justify-content: space-around;
		.portfolio {
			width: 20rem;
			height: 20rem;
			object-fit: cover;
			object-position: 0% 0%;
		}
		.mockup {
			width: 20rem;
			height: 20rem;
			object-fit: cover;
		}
		p {
			margin-top: 1rem;
			font-size: 1.4rem;
			font-family: "Shantell Sans", cursive;
			color: rgb(73, 74, 76);
			text-align: center;
		}
	}

	@media screen and (max-width: 820px) {
		height: 40vh;
		h3 {
			font-size: 4.5rem;
		}
		.projectsInner {
			.portfolio {
				width: 25rem;
				height: 25rem;
			}
			.mockup {
				width: 25rem;
				height: 25rem;
			}
			p {
				font-size: 1.8rem;
			}
		}
	}
`;

export const LinkStyle = styled(Link)`
	text-decoration: none;
`;
