import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 3rem 3rem;
	padding-top: 20rem;
	height: 100vh;
	h1 {
		font-size: 7rem;
		font-family: "Shantell Sans", cursive;
	}
	h2 {
		font-size: 2.8rem;
		font-family: "Mynerve", cursive;
	}

	@media screen and (max-width: 820px) {
		height: 40vh;
	}
`;

export const LinkStyle = styled(Link)`
	font-size: 2rem;
	color: rgb(73, 74, 76);
	&:first-child {
		margin-right: 2rem;
	}
`;
