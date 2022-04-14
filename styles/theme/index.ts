export const primaryColor = '#272b30'
export const secondaryColor = '#32383e'

export const primaryTextColor = '#aaa'
export const secondaryTextColor = '#7a8288'
export const tertiaryTextColor = '#272b30'

export const backgroundColor = '#7a8288'

export interface ThemeProps {
  bgPrimary: string
  bgSecondary?: string
  bgTertiary?: string
  fg: string
}

export const darkTheme: ThemeProps = {
  bgPrimary: 'var(--dark-bg-primary)',
  bgSecondary: 'var(--dark-bg-secondary)',
  bgTertiary: 'var(--dark-bg-tertiary)',
  fg: 'var(--dark-fg)'
}

export const lightTheme: ThemeProps = {
  bgPrimary: 'var(--light-bg-primary)',
  bgSecondary: 'var(--light-bg-secondary)',
  bgTertiary: 'var(--light-bg-tertiary)',
  fg: 'var(--light-fg)'
}
