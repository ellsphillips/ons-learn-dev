import Logo from '@/components/Logo'
import Link from 'next/link'
import React from 'react'
import Container from './styles'

function Header({ sidebarOpen, setSidebarOpen }: any) {
	return (
		<Container>
			<header className="header">
				<div className="container">
					{/* Header: Left side */}
					<Link href="https://www.ons.gov.uk/">
						<a target="_blank" rel="noreferrer">
							<Logo height="2.5rem" includeType={true} />
						</a>
					</Link>

					{/* Header: Right side */}
					<div className="hamburger">
						<button
							aria-controls="sidebar"
							aria-expanded={sidebarOpen}
							onClick={() => setSidebarOpen(!sidebarOpen)}
						>
							<svg
								className="open-button"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect x="4" y="5" width="16" height="2" />
								<rect x="4" y="11" width="16" height="2" />
								<rect x="4" y="17" width="16" height="2" />
							</svg>
						</button>
					</div>
				</div>
			</header>
		</Container>
	)
}

export default Header
