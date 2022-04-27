import styled from 'styled-components'

export default styled.button`
	background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;

	svg {
		width: 1.5rem;
		height: 1.5rem;
		fill: var(--clr-fg-primary);

		transition: fill 150ms ease-out;

		&:hover {
			fill: var(--clr-accent-primary);
		}
	}
`
