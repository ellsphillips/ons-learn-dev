import styled from 'styled-components'

const HeaderContainer = styled.div`
	.header {
		z-index: 30;
		margin-bottom: 2rem;

		@media (min-width: 1024px) {
			margin-bottom: 0;
		}

		.container {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding-inline: 1.5rem;
			line-height: 1;

			color: var(--clr-fg-primary);
			background-color: var(--clr-bg-secondary);
			border-radius: 1rem;

			@media (min-width: 1024px) {
				display: none;
			}

			.hamburger {
				color: var(--clr-fg-primary);
				border-radius: 1rem;

				button {
					color: pink;
					background: none;
					border: none;
					padding: 1rem;
					font: inherit;
					cursor: pointer;
					outline: inherit;
					margin-block: 1rem;
					border-radius: 1rem;

					&:hover {
						background-color: var(--clr-bg-tertiary);
					}

					svg {
						fill: var(--clr-fg-primary);
					}
				}

				.open-button {
					width: 1.5rem;
					height: 1.5rem;
				}

				@media (min-width: 1024px) {
					display: none;
				}
			}
		}
	}
`

export default HeaderContainer
