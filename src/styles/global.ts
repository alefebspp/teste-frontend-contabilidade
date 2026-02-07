import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html,
    body {
      width: 100%;
      overflow-x: hidden;
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    #root {
      width: 100%;
      overflow-x: hidden;
    }
  `}
`

export default GlobalStyles
