import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const Item = styled.div`
	background-color: var(--clr-bg-tertiary);
	border-radius: 4pt;
	color: var(--clr-fg);
	font-size: 3rem;
	padding: 1rem;
	margin-inline: 0.5rem;
	cursor: pointer;

	transition: color ease-in-out 150ms, background-color ease-in-out 150ms;

	&:hover {
		background-color: var(--clr-accent-primary);
		color: var(--clr-bg-primary);
	}
`
