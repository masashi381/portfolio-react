import styled from "styled-components";

export const WorkContainer = styled.div`
	width: 80vw;
	height: 80vh;
	padding-top: 12rem;
	margin: 0 auto;
	h3 {
		font-family: "Mynerve", cursive;
		font-size: 5rem;
		color: rgb(106, 109, 113);
		text-align: center;
		margin: 3rem 0;
	}
	@media screen and (max-width: 820px) {
		width: 90vw;
	}
`;

// WorkAccordionStyles

export const AccordionInner = styled.div`
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
		h3 {
			display: block;
			margin: 0;
			margin-bottom: 0.1rem;
			padding: 1rem;
			font-size: 2.4rem;
			color: rgb(255, 255, 255);
		}
		.accordion-btn {
			margin-right: 1rem;
			cursor: pointer;
		}
	}
	.accordion-content {
		height: 30rem;
		white-space: pre-line;
		background-color: white;
		color: rgb(106, 109, 113);
		padding: 1rem;
	}
`;
