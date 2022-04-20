import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import Logo from '../../assets/img/logo.svg'

const App = (): ReactElement => {
	return (
		<>
			<h1>Welcome!</h1>
			<Link href="/about">
				<a>
					<Image src={Logo} alt="Logo" width={200} height={200} />
				</a>
			</Link>
		</>
	)
}

export default App
