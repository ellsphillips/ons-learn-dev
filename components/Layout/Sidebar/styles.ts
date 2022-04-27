import BackArrow from '@/components/Button/BackArrow/style'
import { breakpoints } from '@/styles/breakpoints'
import styled from 'styled-components'

export const Backdrop = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 40;

	transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);

	@media (min-width: ${breakpoints.desktop}) {
		display: none;
		z-index: auto;
	}
`

export const Container = styled.div`
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
