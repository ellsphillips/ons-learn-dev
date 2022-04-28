import styled from 'styled-components'

export default styled.button`
	align-items: center;
	background: none;
	border: none;
	padding: 0.75rem 1rem;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	border-radius: 1rem;

	&:hover {
		background-color: var(--clr-bg-tertiary);
	}

	svg {
		width: 1.5rem;
		height: 1.5rem;
		fill: var(--clr-fg-primary);

		transition: fill 150ms ease-out;
	}
`
