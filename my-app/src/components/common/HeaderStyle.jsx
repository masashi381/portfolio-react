import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
	display: block;
	position: fixed;
	z-index: 100;
	width: 100%;
	height: 5rem;
	.navigation {
		background-color: rgb(249, 249, 249);
		padding: 3rem 2rem 3rem 0;
		ul {
			display: flex;
			justify-content: end;
			li {
				list-style: none;
				&:hover {
					opacity: 0.5;
				}
			}
		}
	}
	@media screen and (max-width: 375px) {
		display: flex;
		height: 6rem;
		justify-content: flex-end;
		background-color: rgb(249, 249, 249);
		.navigation {
			display: none;
			align-items: center;
			padding: 0;
			margin-top: 6rem;
			height: 90vh;
			justify-content: center;
			flex-direction: column;
			position: fixed;
			top: 0;
			right: 0;
			left: 0;
			background-color: white;
			ul {
				display: flex;
				justify-content: center;
				flex-direction: column;
				gap: 1rem 0;
				li {
					list-style: none;
					text-align: center;
					&:hover {
						opacity: 0.5;
					}
				}
			}
			&[aria-hidden="false"] {
				display: flex;
			}
		}
	}
`;

export const HeaderLinkStyle = styled(Link)`
	font-size: 1.6rem;
	font-family: "Shantell Sans", cursive;
	padding: 1rem;
	color: rgb(142, 152, 164);
	text-decoration: none;

	@media screen and (max-width: 375px) {
		font-size: 4rem;
	}
`;

export const HamburgerStyle = styled.button`
	display: none;
	padding: 0;
	margin: 0;
	@media screen and (max-width: 375px) {
		display: block;
		position: relative;
		width: 4rem;
		height: 4rem;
		margin-top: 1rem;
		margin-right: 1rem;
		border: none;
		background-color: transparent;
		.line {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			display: inline-block;
			width: 100%;
			height: 2px;
			background-color: #333;
		}
		.line-1 {
			transform: translate(0, -10px);
		}

		.line-2 {
			transform: translate(0, 10px);
		}
		&[aria-expanded="true"] > .line-1 {
			transform: translate(0, 0) rotate(-45deg);
		}

		&[aria-expanded="true"] > .line-2 {
			transform: translate(0, 0) rotate(45deg);
		}

		&[aria-expanded="true"] > .line-3 {
			display: none;
		}
	}
`;
