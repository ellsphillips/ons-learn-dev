import Layout from '@/components/Layout'
import React from 'react'

const AboutPage = () => {
	const test = true

	return (
		<>
			<Layout>
				<h1>About this site...</h1>
				{test && <h2>thing</h2>}
			</Layout>
		</>
	)
}

export default AboutPage
