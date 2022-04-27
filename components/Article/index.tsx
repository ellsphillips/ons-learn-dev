import React from 'react'

interface ArticleProps {
	title: string
	subtitle: string
	author: string
	thumbnail: string
	profile: string
}

const Article = (props: ArticleProps) => {
	return (
		<>
			<h1>This is: {props.title}</h1>
		</>
	)
}

export default Article
