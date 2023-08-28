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
		-o-object-fit: cover;
		object-fit: cover;
		border-radius: 50%;
		margin-left: 5rem;
	}
	.miniTitle {
		font-size: 2.4rem;
		color: rgb(73, 74, 76);
		margin-bottom: 2rem;
		strong {
			font-size: 4rem;
		}
	}
	.detail {
		width: 50vw;
		font-size: 1.8rem;
		color: rgb(73, 74, 76);
		margin-bottom: 1rem;
	}
	.hobbyTitle {
		font-size: 1.8rem;
		color: rgb(73, 74, 76);
		margin-bottom: 1rem;
	}
	ul {
		width: 25vw;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem 1rem;
		li {
			font-size: 1.8rem;
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
		padding-top: 1rem;
		height: 50vh;
		.aboutInner {
			margin-left: 2rem;
		}
		ul {
			width: 40vw;
		}
	}
`;
