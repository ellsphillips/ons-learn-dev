import Card from '@/components/Card'
import Grid from '@/components/Grid'
import Layout from '@/components/Layout'
import articles from '@/config/articles'
import Link from 'next/link'
import React from 'react'
import { CONTENT } from '../config/'

const HomePage = () => {
	return (
		<Layout>
			{/*  */}
			{CONTENT.home}

			<Grid>
				{articles.map(article => (
					<Link href={`/article/${article.slug}`}>
						<a style={{ textDecoration: 'none' }}>
							<Card
								author={article.author}
								title={article.title}
								subtitle={article.subtitle}
								profile={article.profile}
								thumbnail={article.thumbnail}
							/>
						</a>
					</Link>
				))}
			</Grid>
		</Layout>
	)
}

export default HomePage
