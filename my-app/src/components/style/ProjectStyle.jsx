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
			width: 200px;
			height: 200px;
			object-fit: cover;
			object-position: 0% 0%;
		}
		.mockup {
			width: 200px;
			height: 200px;
			object-fit: cover;
		}
		p {
			font-size: 1.4rem;
			font-family: "Shantell Sans", cursive;
			color: rgb(73, 74, 76);
			text-align: center;
		}
	}
`;

export const LinkStyle = styled(Link)`
	text-decoration: none;
`;
