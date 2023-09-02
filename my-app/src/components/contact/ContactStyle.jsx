import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContactsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 12rem;
	margin: 0 2rem 5rem;

	@media screen and (max-width: 375px) {
		flex-direction: column;
	}
`;

// form style

export const FormStyle = styled.form`
	width: 30vw;
	margin: 0 auto;
	margin-right: 2rem;
	div {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 1rem auto;
		label {
			font-size: 1.6rem;
			font-family: "Shantell Sans", cursive;
			padding-bottom: 1rem;
			color: rgb(106, 109, 113);
		}
	}
	button {
		width: 100%;
		border-radius: 1rem;
		border: none;
		font-size: 1.5rem;
		padding: 1rem 2rem;
		margin-top: 2rem;
		letter-spacing: 0.1rem;
		background: rgb(138, 140, 143);
		color: rgb(255, 255, 255);
	}

	@media screen and (max-width: 820px) {
		width: 40vw;
	}

	@media screen and (max-width: 375px) {
		order: 2;
		width: 90%;
    margin-top: 2rem;
	}
`;

// SNS style

export const OptionsStyle = styled.div`
	margin: 5rem auto 0;
	width: 33vw;
	p {
		font-size: 1.6rem;
		font-family: "Shantell Sans", cursive;
		width: 100%;
		margin-bottom: 5rem;
		text-align: center;
		line-height: 1.5;
	}
	div {
		display: flex;
		justify-content: space-evenly;
	}

	@media screen and (max-width: 820px) {
		width: 40vw;
		p {
			font-size: 2rem;
		}
	}

	@media screen and (max-width: 375px){
		order: 1;
		width: 90%;
    margin-top: 1rem;
		p{
			margin-bottom: 3rem;
		}
	}
`;

export const IconsStyle = styled(Link)`
	font-size: 2rem;
	color: rgb(73, 74, 76);

	@media screen and (max-width: 375px){
		font-size: 3rem;
	}
`;
