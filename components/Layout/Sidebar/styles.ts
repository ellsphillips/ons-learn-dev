import BackArrow from '@/components/Button/BackArrow/style'
import { breakpoints } from '@/styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div``

export const Backdrop = styled.div`
	width: 100%;
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

export const Menu = styled.div`
	position: absolute;
	z-index: 40;

	height: calc(100vh - 4rem);

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	overflow-y: scroll;
	overflow-x: hidden;
	-ms-overflow-style: none;
	scrollbar-width: none;
	width: 30rem;
	flex-shrink: 0;
	background-color: var(--clr-bg-secondary);
	padding: 1.5rem;
	border-radius: 1rem;

	transition: transform cubic-bezier(0.4, 0, 0.2, 1) 200ms;

	@media (min-width: ${breakpoints.desktop}) {
		left: 34rem;
		top: auto;
		transform: translateX(32rem);
		overflow-y: auto;
	}
`

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2.5rem;

	${BackArrow} {
		@media (min-width: ${breakpoints.desktop}) {
			display: none;
		}
	}
`

export const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
