import React from 'react'
import { Container, Heading, Paragraph, Picture } from './styles'

const Hero = () => {
	return (
		<Container>
			<Heading>Dataclasses are awesome</Heading>

			<Paragraph>
				Dataclasses in Python are super powerful - particluarly suited to model
				classes that represent structured data. They offer easy mechanisms to
				initialize, print, order, sort and compare data.
			</Paragraph>

			<Picture src="https://raw.githubusercontent.com/ellsphillips/ons.dev/master/assets/img/profile/ep.jpg" />
		</Container>
	)
}

export default Hero
