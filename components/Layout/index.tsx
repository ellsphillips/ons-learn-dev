import ThemeContext from '@/contexts/ThemeContext'
import useThemeMode from '@/hooks/useThemeMode'
import GlobalStyles from '@/styles/global'
import { darkTheme, lightTheme } from '@/styles/theme/Theme'
import React, { ReactElement, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Navigation from '../Nav'
import SocialMedia from '../SocialMedia'
import ThemeToggle from '../ThemeToggle'
import Header from './Header'
import Hero from './Hero'
import Main from './Main'
import Sidebar from './Sidebar'
import * as Menu from './Sidebar/styles'
import { Container, Wrapper } from './styles'

const Layout = ({ children }): ReactElement => {
	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		setHasMounted(true)
	}, [])

	const { theme, themeToggler } = useThemeMode()
	const themeMode = theme === 'dark' ? darkTheme : lightTheme

	const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

	const body = (
		<ThemeContext>
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />

				<Wrapper>
					<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
						<Navigation />

						<Menu.Footer>
							<SocialMedia />
							<ThemeToggle themeToggler={themeToggler} />
						</Menu.Footer>
					</Sidebar>

					<Container>
						<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

						<Main>
							<Hero />

							{children}
						</Main>
					</Container>
				</Wrapper>
			</ThemeProvider>
		</ThemeContext>
	)

	if (!hasMounted) {
		return <div style={{ visibility: 'hidden' }}>{body}</div>
	}
	return body
}

export default Layout
