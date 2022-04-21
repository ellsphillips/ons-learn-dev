import { createGlobalStyle, withTheme } from 'styled-components'
import { fontFamily } from '../fonts'
import { ThemeProps } from '../theme/Theme'

type GlobalThemeProps = {
	theme: ThemeProps
}

const globalStyle = createGlobalStyle`
    :root {
        --clr-bg-primary: ${({ theme }: GlobalThemeProps) => theme.bg.primary};
        --clr-bg-secondary: ${({ theme }: GlobalThemeProps) =>
					theme.bg.secondary};
        --clr-bg-tertiary: ${({ theme }: GlobalThemeProps) =>
					theme.bg.tertiary};
        --clr-fg: ${({ theme }: GlobalThemeProps) => theme.fg.primary};

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
        font-weight: 400;
        line-height: 1.6;
        color: var(--clr-fg);
        background-color: var(--clr-bg-primary);
        background-size: cover;
        background-repeat: no-repeat;
        transition: color 250ms ease-in-out, background-color 250ms ease-in-out;
    }

    h1, h2, h3 {
        font-size: 3.375rem;
        color: var(--clr-fg);
    }

    ::selection {
        background-color: var(--clr-accent);
        color: var(--clr-bg-primary);
    }
`

export default withTheme(globalStyle)
