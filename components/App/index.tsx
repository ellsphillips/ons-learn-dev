import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement } from 'react'

const App = (): ReactElement => {
	return (
		<>
			<h1>Welcome!</h1>
			<Link href="/about">
				<a>
					<Image
						src="/assets/img/logo.svg"
						alt="Doctor"
						width={200}
						height={200}
					/>
				</a>
			</Link>
		</>
	)
}

export default App
