import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProjectContainer = styled.div`
	height: 80vh;
	h3 {
		padding-top: 10rem;
		margin-bottom: 5rem;
		font-family: "Mynerve", cursive;
		font-size: 5rem;
		color: rgb(106, 109, 113);
		text-align: center;
	}
	.projectsInner {
		display: flex;
		justify-content: space-around;
		.img {
			width: 25rem;
			height: 25rem;
			object-fit: cover;
		}
		.portfolio {
			object-position: 0% 0%;
		}
		p {
			margin-top: 1rem;
			font-size: 1.8rem;
			font-family: "Shantell Sans", cursive;
			color: rgb(73, 74, 76);
			text-align: center;
		}
	}

	@media screen and (max-width: 375px){
		height: auto;
		.projectsInner{
			flex-direction: column;
			.img{
    		display: block;
				width: 90%;
    		margin: 0 auto;
			}
			p{
				margin: 2rem auto;
			}
		}
	}
`;

export const LinkStyle = styled(Link)`
	text-decoration: none;
`;
