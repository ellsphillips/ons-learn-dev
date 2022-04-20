import ThemeContext from '@/contexts/ThemeContext'
import useThemeMode from '@/hooks/useThemeMode'
import GlobalStyles from '@/styles/global'
import { darkTheme, lightTheme } from '@/styles/theme/Theme'
import React, { ReactElement, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Navigation from '../Nav'
import ThemeToggle from '../ThemeToggle'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'
import { Container, Wrapper } from './styles'

const Layout = ({ children }): ReactElement => {
	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		setHasMounted(true)
	}, [])

	const { theme, themeToggler } = useThemeMode()
	const themeMode = theme === 'dark' ? darkTheme : lightTheme

	//   const darkMode = useDarkMode(false, { storageKey: null, onChange: null })
	//   const themeMode = darkMode.value ? darkTheme : lightTheme

	const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

	const body = (
		<ThemeContext>
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />

				<Wrapper>
					<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

					<Container>
						<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
						<Main>
							<Navigation />
							<ThemeToggle themeToggler={themeToggler} />
							{children}
						</Main>
					</Container>

					{/* <Center>{children}</Center> */}
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
