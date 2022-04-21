import styled from 'styled-components'

const HeaderContainer = styled.div`
	.header {
		z-index: 30;
		margin-bottom: 2rem;

		@media (min-width: 1024px) {
			margin-bottom: 0;
		}

		.container {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;

			background-color: var(--clr-bg-secondary);
			border-radius: 1rem;

			@media (min-width: 1024px) {
				display: none;
			}

			.hero {
				background-size: cover;
				width: 100%;
				height: 50%;
			}

			.navigation {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-right: 1.5rem;

				.hamburger {
					color: rgba(107, 114, 128, 1);

					&:hover {
						color: rgba(75, 85, 99, 1);
					}

					span {
						position: absolute;
						width: 1px;
						height: 1px;
						padding: 0;
						margin: -1px;
						overflow: hidden;
						clip: rect(0, 0, 0, 0);
						white-space: nowrap;
						border-width: 0;
					}

					button {
						color: white;
						background: none;
						border: none;
						padding: 0;
						font: inherit;
						cursor: pointer;
						outline: inherit;
						margin: 1.5rem;
					}

					.open-button {
						width: 1.5rem;
						height: 1.5rem;
						fill: currentColor;
					}

					@media (min-width: 1024px) {
						display: none;
					}
				}
			}
		}
	}
`

export default HeaderContainer
