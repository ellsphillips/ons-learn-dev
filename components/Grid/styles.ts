import { breakpoints } from '@/styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	gap: 1rem;

	@media (min-width: ${breakpoints.mobile}) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media (min-width: ${breakpoints.tablet}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: ${breakpoints.desktop}) {
		grid-template-columns: repeat(3, 1fr);
	}
`
