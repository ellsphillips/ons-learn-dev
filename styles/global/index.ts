import { createGlobalStyle, withTheme } from 'styled-components'
import { fontFamily } from '../fonts'
import { ThemeProps } from '../theme'

type GlobalThemeProps = {
  theme: ThemeProps
}

const globalStyle = createGlobalStyle`
    :root {
        --dark-bg-primary: #1A1B27;
        --dark-bg-secondary: #444;
        --dark-bg-tertiary: #888;
        --dark-fg: #F5F5F7;

        --light-bg-primary: #f2f2f2;
        --light-bg-secondary: #ccc;
        --light-bg-tertiary: #999;
        --light-fg: #1A1B27;

        --accent-clr: #ff6188;
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
        color: ${({ theme }: GlobalThemeProps) => theme.fg};
        background-color: ${({ theme }: GlobalThemeProps) => theme.bgPrimary};
        background-size: cover;
        background-repeat: no-repeat;
        transition: color, background-color 250ms ease-in-out;
    }

    h1, h2, h3 {
        font-size: 3.375rem;
        color: ${({ theme }: GlobalThemeProps) => theme.fg};
    }

    ::selection {
        background-color: hsl(var(--clr-secondary));
        color: var(--clr-bg);
    }
`

export default withTheme(globalStyle)
