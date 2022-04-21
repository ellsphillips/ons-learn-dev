import { createGlobalStyle, withTheme } from 'styled-components'
import { fontFamily } from '../fonts'
import { ThemeProps } from '../theme/Theme'

type GlobalThemeProps = {
	theme: ThemeProps
}

const globalStyle = createGlobalStyle`
  :root {
    --clr-bg-primary: ${({ theme }: GlobalThemeProps) => theme.bg.primary};
    --clr-bg-secondary: ${({ theme }: GlobalThemeProps) => theme.bg.secondary};
    --clr-bg-tertiary: ${({ theme }: GlobalThemeProps) => theme.bg.tertiary};
    --clr-fg-primary: ${({ theme }: GlobalThemeProps) => theme.fg.primary};
    --clr-fg-secondary: ${({ theme }: GlobalThemeProps) => theme.fg.secondary};
    --clr-fg-tertiary: ${({ theme }: GlobalThemeProps) => theme.fg.tertiary};

    --clr-accent: ${({ theme }: GlobalThemeProps) => theme.accent};
    font-family: ${fontFamily};



    --clr-primary: 020, 85%, 68%;
    --clr-secondary: 045, 100%, 70%;

    --clr-grey-100: 060, 25%, 98%;
    --clr-grey-200: 000, 01%, 75%;
    --clr-grey-400: 280, 02%, 35%;
    --clr-grey-500: 280, 02%, 25%;
    --clr-grey-700: 285, 05%, 17%;
    --clr-grey-800: 300, 05%, 13%;
    --clr-grey-900: 270, 04%, 10%;
  }

  * {
    margin: 0;
    padding: 0;
    transition: color 250ms ease-in-out, background-color 250ms ease-in-out;
  }

  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body  {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.6;
    color: var(--clr-fg-tertiary);
    background-color: var(--clr-bg-primary);
    background-size: cover;
    background-repeat: no-repeat;
  }

  h1 {
    font-size: 2.75rem;
    color: var(--clr-fg-primary);
  }

  h2 {
    font-size: 2.25rem;
    color: var(--clr-fg-secondary);
  }

  h3 {
    font-size: 1.75rem;
    color: var(--clr-fg-secondary);
  }

  ul {
    list-style: none;
  }
  li {
    position: relative;
    margin: 10px;
    margin-left: 25px;

    &:before {
      content: '';
      position: absolute;
      display: block;
      left: -2rem;
      top: 0.75rem;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 0.25rem;
      background-color: var(--clr-accent);
    }
  }
  
  li {
  }

  ::selection {
      background-color: var(--clr-accent);
      color: var(--clr-bg-primary);
  }
`

export default withTheme(globalStyle)
