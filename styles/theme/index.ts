export const primaryColor = '#272b30'
export const secondaryColor = '#32383e'

export const primaryTextColor = '#aaa'
export const secondaryTextColor = '#7a8288'
export const tertiaryTextColor = '#272b30'

export const backgroundColor = '#7a8288'

export interface ThemeProps {
	bg: {
		primary: string
		secondary: string
		tertiary: string
	}
	fg: string
}

export const darkTheme: ThemeProps = {
	bg: {
		primary: 'var(--dark-bg-primary)',
		secondary: 'var(--dark-bg-secondary)',
		tertiary: 'var(--dark-bg-tertiary)',
	},
	fg: 'var(--dark-fg)',
}

export const lightTheme: ThemeProps = {
	bg: {
		primary: 'var(--light-bg-primary)',
		secondary: 'var(--light-bg-secondary)',
		tertiary: 'var(--light-bg-tertiary)',
	},
	fg: 'var(--light-fg)',
}
