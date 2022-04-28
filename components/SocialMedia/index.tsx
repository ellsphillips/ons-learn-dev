import React from 'react'
import GitHubLogo from '../Logo/GitHub'
import LinkedInLogo from '../Logo/LinkedIn'
import { Container } from './styles'

const SocialMedia = () => {
	return (
		<Container>
			<GitHubLogo
				href="https://github.com/ellsphillips/ons.dev"
				style={{
					fill: 'var(--clr-fg-primary)',
				}}
			/>
			<LinkedInLogo
				href="https://www.linkedin.com/in/elliott-phillips/"
				style={{
					fill: 'var(--clr-fg-primary)',
				}}
			/>
		</Container>
	)
}

export default SocialMedia
