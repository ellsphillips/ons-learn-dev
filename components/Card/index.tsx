import React from 'react'
import {
	Author,
	Container,
	Details,
	Info,
	ProfilePicture,
	Thumbnail,
	Title,
} from './styles'

interface CardProps {
	title: string
	subtitle: string
	author: string
	thumbnail: string
	profile: string
}

const Card = (props: CardProps) => {
	return (
		<Container>
			<Thumbnail src={props.thumbnail} />

			<Details>
				<Info>
					<Title>{props.title}</Title>
					{/* <Subtitle>{props.subtitle}</Subtitle> */}
					<Author>{props.author}</Author>
				</Info>

				<ProfilePicture src={props.profile} />
			</Details>
		</Container>
	)
}

export default Card
