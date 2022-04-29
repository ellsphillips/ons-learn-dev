import styled from 'styled-components'

export const LogoDefaults = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 1;
	cursor: 'pointer';

	svg {
		transition: fill 150ms ease-out;

		&:hover {
			fill: var(--clr-accent-primary);
		}
	}
`
