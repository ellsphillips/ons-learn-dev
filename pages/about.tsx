import React from 'react'
import Layout from '../components/Layout'

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
