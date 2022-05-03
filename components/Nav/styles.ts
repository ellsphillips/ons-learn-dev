import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 0.5rem;
`

export const Item = styled.div`
	background-color: var(--clr-bg-tertiary);
	border-radius: 4pt;
	color: var(--clr-fg-primary);
	font-size: 1.4rem;
	font-weight: 700;
	padding: 0.5rem 1rem;
	cursor: pointer;

	transition: color ease-in-out 150ms, background-color ease-in-out 150ms;

	&:hover {
		background-color: var(--clr-accent-primary);
		color: var(--clr-bg-primary);
	}
`
