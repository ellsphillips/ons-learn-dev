import Logo from '@/assets/img/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HomeContent() {
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
