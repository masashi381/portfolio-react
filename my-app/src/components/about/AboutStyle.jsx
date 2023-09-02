import styled from "styled-components";

export const AboutContainer = styled.div`
	height: 70vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 12rem;
	margin: 0 3rem 3rem;
	img {
		width: 30vw;
		height: auto;
		object-fit: cover;
		border-radius: 50%;
		margin-left: 5rem;
	}
	.miniTitle {
		font-size: 2.4rem;
		color: rgb(73, 74, 76);
		margin-bottom: 2rem;
		font-family: "Shantell Sans", cursive;
		strong {
			font-size: 4rem;
			font-family: "Shantell Sans", cursive;
		}
	}
	.detail {
		width: 50vw;
		font-size: 1.8rem;
		font-family: "Shantell Sans", cursive;
		color: rgb(73, 74, 76);
		margin-bottom: 1rem;
	}
	.hobbyTitle {
		font-size: 1.8rem;
		color: rgb(73, 74, 76);
		margin-bottom: 1rem;
		font-family: "Shantell Sans", cursive;
	}
	ul {
		width: 25vw;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem 1rem;
		li {
			font-size: 1.8rem;
			font-family: "Shantell Sans", cursive;
			border: 1px solid rgba(73, 74, 76, 0.5);
			border-radius: 9rem;
			padding: 0.5rem;
			i {
				margin-right: 0.5rem;
				color: rgb(23, 30, 219);
			}
		}
	}

	@media screen and (max-width: 820px) {
		height: 50vh;
		.aboutInner {
			margin-left: 2rem;
		}
		ul {
			width: 40vw;
		}
	}

	@media screen and (max-width: 375px) {
		flex-direction: column;
		height: 100%;
		img {
			width: 60vw;
			height: auto;
			margin: 0;
		}
		.aboutInner {
			width: 90vw;
			margin: 0;
			margin-top: 2rem;
			.miniTitle {
				text-align: center;
			}
			.detail {
				width: 90%;
				margin: 0 auto 1rem;
				text-align: center;
			}
			.hobbyTitle {
				width: 90%;
				margin: 0 auto 2rem;
				text-align: center;
			}
			ul {
				width: 90%;
				margin: 0 auto;
			}
		}
	}
`;
