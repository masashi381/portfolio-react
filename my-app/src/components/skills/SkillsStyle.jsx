import styled from "styled-components";

export const SkillsContainer = styled.div`
	height: 50vw;
	padding-top: 10rem;
	h3 {
		font-family: "Mynerve", cursive;
		font-size: 5rem;
		color: rgb(106, 109, 113);
		text-align: center;
	}
	.skillsInner {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 60vh;
		margin-top: 5rem;
	}

	@media screen and (max-width: 820px) {
		padding-top: 8rem;
		h3 {
			font-size: 4.5rem;
		}
		.skillsInner {
			height: 30vh;
		}
	}

	@media screen and (max-width: 375px) {
		width: 90%;
		height: auto;
		padding-top: 5rem;
		margin: 2rem auto;
		.skillsInner {
			flex-direction: column;
			height: auto;
		}
	}
`;

// PersonalSkills

export const AccordionInner = styled.div`
	width: 40vw;
	background-color: rgb(106, 109, 113);
	color: rgb(255, 255, 255);
	display: block;
	margin-bottom: 0.1rem;
	padding: 0.1rem;
	font-size: 1.8rem;
	.accordion-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		h3 {
			display: block;
			margin-bottom: 0.1rem;
			padding: 1rem;
			font-size: 1.8rem;
			color: rgb(255, 255, 255);
		}
		.toggle {
			margin-right: 1rem;
			/* cursor: pointer; */
		}
	}
	.accordion-content {
		width: 40vw;
		height: 18vh;
		white-space: pre-line;
		background-color: white;
		color: rgb(106, 109, 113);
		padding: 1rem;
		font-family: "Shantell Sans", cursive;
		box-sizing: border-box;
	}

	@media screen and (max-width: 820px) {
		width: 50vw;
		.accordion-content {
			width: 50vw;
			height: 20vh;
		}
	}

	@media screen and (max-width: 375px) {
		width: 90vw;
		.accordion-content {
			width: 90vw;
			height: auto;
		}
	}
`;

// ProgrammingSkills

export const GridContainer = styled.div`
	width: 40vw;
	display: grid;
	grid-template: repeat(1, 1fr) / repeat(6, 1fr);
	grid-template-areas:
		"item1 item1 item2 item2 item3 item3"
		"item4 item4 item5 item5 item6 item6";
	row-gap: 2rem;
	.items {
		display: flex;
		flex-direction: column;
		align-items: center;
		i {
			font-size: 5rem;
			color: rgb(106, 109, 113);
		}
		p {
			text-align: center;
			font-family: "Shantell Sans", cursive;
			font-size: 1.4rem;
			padding: 0.5rem 0;
			color: rgb(106, 109, 113);
		}
	}
	.item1 {
		grid-area: item1;
	}
	.item2 {
		grid-area: item2;
	}
	.item3 {
		grid-area: item3;
	}
	.item4 {
		grid-area: item4;
	}
	.item5 {
		grid-area: item5;
	}
	.item6 {
		grid-area: item6;
	}

	@media screen and (max-width: 375px) {
		width: 90vw;
		margin-top: 2rem;
	}
`;
