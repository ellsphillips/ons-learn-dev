import Layout from '@/components/Layout'
import Hero from '@/components/Layout/Hero'
import articles from '@/config/articles'
import React from 'react'

export default function ArticlePage({ article }) {
	return (
		<Layout>
			<Hero
				title={article.title}
				caption={article.caption}
				profile={article.profile}
			/>

			<h3>{'<Content />'}</h3>
		</Layout>
	)
}

export async function getStaticProps({ params }) {
	const result = articles.filter(article =>
		article.title.toLowerCase().replace(/ /g, '-').includes(params.slug)
	)

	return {
		props: {
			article: result[0],
		},
	}
}

export async function getStaticPaths() {
	return {
		paths: articles.map(article => {
			const slug = article.title.toLowerCase().replace(/ /g, '-')
			return {
				params: {
					slug,
				},
			}
		}),
		fallback: false,
	}
}
