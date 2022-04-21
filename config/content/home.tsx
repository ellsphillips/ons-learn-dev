import Logo from '@/components/Logo'
import Link from 'next/link'
import React from 'react'

export default function HomeContent() {
	return (
		<>
			<h1>Welcome!</h1>
			<Link href="/about">
				<a>
					<Logo width="50%" includeType={true} />
				</a>
			</Link>
		</>
	)
}
