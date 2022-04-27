import BackArrow from '@/components/Button/BackArrow'
import Logo from '@/components/Logo'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Backdrop, Container, Header } from './styles'

const Sidebar = ({ sidebarOpen, setSidebarOpen }: any) => {
	const trigger: React.MutableRefObject<any> = useRef(null)
	const sidebar: React.MutableRefObject<any> = useRef(null)

	// close on click outside
	useEffect(() => {
		const clickHandler = ({ target }) => {
			if (!sidebar.current || !trigger.current) return
			if (
				!sidebarOpen ||
				sidebar.current.contains(target) ||
				trigger.current.contains(target)
			)
				return
			setSidebarOpen(false)
		}
		document.addEventListener('click', clickHandler)
		return () => document.removeEventListener('click', clickHandler)
	})

	// close if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }) => {
			if (!sidebarOpen || keyCode !== 'Escape') return
			setSidebarOpen(false)
		}
		document.addEventListener('keydown', keyHandler)
		return () => document.removeEventListener('keydown', keyHandler)
	})

	return (
		<Container>
			<Backdrop
				style={
					sidebarOpen
						? { opacity: 1 }
						: {
								opacity: 0,
								pointerEvents: 'none',
						  }
				}
				aria-hidden="true"
			></Backdrop>

			{/* Sidebar */}
			<div
				ref={sidebar}
				className={`sidebar--menu ${
					sidebarOpen ? 'sidebar--menu__open' : 'sidebar--menu__close'
				}`}
			>
				{/* Sidebar header */}
				<Header>
					<BackArrow
						ref={trigger}
						onClick={() => setSidebarOpen(!sidebarOpen)}
						aria-controls="sidebar"
					/>

					<Link href="https://www.ons.gov.uk/">
						<a target="_blank" rel="noreferrer">
							<Logo width="75%" includeType={true} />
						</a>
					</Link>
				</Header>
			</div>
		</Container>
	)
}

export default Sidebar
