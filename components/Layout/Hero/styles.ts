import { breakpoints } from '@/styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	margin: 0 auto;
	margin-bottom: 4rem;
	width: min(calc(100% - 2rem), 62.5rem);
	padding: 0rem;
	inset: 1rem;

	display: grid;
	gap: 1rem;
	grid-template-areas:
		'heading image'
		'paragraph image';

	@media (max-width: ${breakpoints.mobile}) {
		grid-template-areas:
			'heading image'
			'paragraph paragraph';
	}

	&::before {
		content: '';
		position: absolute;
		inset: -1rem;

		grid-row: 1 / 2;

		background-color: var(--clr-accent-primary);
		background-image: linear-gradient(
			145deg,
			var(--clr-accent-primary),
			var(--clr-accent-secondary)
		);

		border-radius: 1em;
		z-index: -1;
	}
`

export const Heading = styled.h1`
	grid-area: heading;
	display: flex;
	align-items: flex-end;
	width: clamp(14ch, 70%, 18ch);
	color: var(--clr-bg-primary);
	font-size: 4rem;
	line-height: 1.2;
	padding: 0.5rem;
`

export const Paragraph = styled.p`
	grid-area: paragraph;
	color: var(--clr-fg-secondary);
	font-weight: bold;
	font-size: 2rem;
	padding: 0.5rem;
`

export const Picture = styled.img`
	grid-area: image;
	border-radius: 1rem;
	width: 100%;
	height: 70%;
	object-fit: cover;
	object-position: center;

	@media (max-width: ${breakpoints.mobile}) {
		height: 100%;
	}
`
