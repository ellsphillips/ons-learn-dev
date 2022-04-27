import BackArrow from '@/components/Button/BackArrow/style'
import { breakpoints } from '@/styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
	.sidebar--backdrop {
		position: fixed;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		background-color: rgba(0, 0, 0, 0.5);

		z-index: 40;

		transition-property: opacity;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 200ms;

		&__open {
			opacity: 1;
		}

		&__close {
			opacity: 0;
			pointer-events: none;
		}

		@media (min-width: ${breakpoints.desktop}) {
			display: none;
			z-index: auto;
		}
	}

	.sidebar--menu {
		position: absolute;
		z-index: 40;

		transform: translateX(-30rem);

		height: calc(100vh - 4rem);
		overflow-y: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		width: 30rem;
		flex-shrink: 0;
		background-color: var(--clr-bg-secondary);
		padding: 1.5rem;
		border-radius: 1rem;

		transition: transform cubic-bezier(0.4, 0, 0.2, 1) 200ms;

		&__open {
			transform: translateX(0rem);
		}

		&__close {
			transform: translateX(-32rem);
		}

		@media (min-width: ${breakpoints.desktop}) {
			left: auto;
			top: auto;
			transform: translateX(0);
			overflow-y: auto;
		}
	}
`

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2.5rem;
	padding-right: 0.75rem;

	${BackArrow} {
		@media (min-width: ${breakpoints.desktop}) {
			display: none;
		}
	}
`
