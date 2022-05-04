import React from 'react'
import { Container, Heading, Paragraph, Picture } from './styles'

interface HeroProps {
	title: string
	caption: string
	profile: string
}

const Hero = (props: HeroProps) => {
	return (
		<Container>
			<Heading>{props.title}</Heading>
			<Paragraph>{props.caption}</Paragraph>
			<Picture src={props.profile} />
		</Container>
	)
}

export default Hero
