export interface ThemeProps {
	bg: {
		primary: string
		secondary: string
		tertiary: string
	}
	fg: {
		primary: string
		secondary: string
		tertiary: string
		quarternary: string
		placeholder: string
		onPrimary: string
	}
	accent: string
}

const light: ThemeProps = {
	bg: {
		primary: '#f8f8ff',
		secondary: '#e2e3e8',
		tertiary: '#b0b1b4',
	},
	fg: {
		primary: 'var(--dark-bg-primary)',
		secondary: '#2f3037',
		tertiary: '#525560',
		quarternary: '#9194a1',
		placeholder: 'rgba(82,85,96,0.5)',
		onPrimary: '#ffffff',
	},
	accent: 'rgba(0,61,89,1)',
	// ...
}

const dark: ThemeProps = {
	bg: {
		primary: '#111119',
		secondary: '#1A1B27',
		tertiary: '#525560',
	},
	fg: {
		primary: '#fbfbfc',
		secondary: '#e3e4e8',
		tertiary: '#a9abb6',
		quarternary: '#6c6f7e',
		placeholder: 'rgba(145,148,161,0.5)',
		onPrimary: '#050505',
	},
	accent: '#fc9867',
	// ...
}

const defaultTheme = {
	fontSizes: [
		'14px', // 0
		'16px', // 1
		'18px', // 2
		'22px', // 3
		'26px', // 4
		'32px', // 5
		'40px', // 6
	],
	fontWeights: {
		body: 400,
		subheading: 500,
		link: 600,
		bold: 700,
		heading: 800,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.3,
		code: 1.6,
	},
	// ...
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }
