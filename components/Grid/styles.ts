import { breakpoints } from '@/styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	gap: 1rem;

	@media (min-width: ${breakpoints.tablet}) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: ${breakpoints.tablet}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: ${breakpoints.mobile}) {
		grid-template-columns: repeat(1, 1fr);
	}
`
