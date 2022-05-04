import Card from '@/components/Card'
import Grid from '@/components/Grid'
import articles from '@/config/articles'
import useSlug from '@/hooks/useSlug'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
	return (
		<>
			<Grid>
				{articles.map(article => (
					<Link
						key={useSlug(article.title)}
						href={`/article/${useSlug(article.title)}`}
					>
						<a style={{ textDecoration: 'none' }}>
							<Card
								author={article.author}
								title={article.title}
								subtitle={article.caption}
								profile={article.profile}
								thumbnail={article.thumbnail}
							/>
						</a>
					</Link>
				))}
			</Grid>
		</>
	)
}

export default HomePage
