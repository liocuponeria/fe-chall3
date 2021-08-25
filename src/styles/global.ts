import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;

    @media(max-width: 720px){
        font-size: 09px
    }
  }

  body {
    background: ${props => props.theme.colors.neutral.white};

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  h1,h2,h3,h4,h5,h6,strong{
      font-weight: 500;
  }

  button {
      cursor:pointer;
  }


  [disabled]{
      opacity: 0.6;
      cursor: not-allowed;
  }

  a {
      color: inherit;
      text-decoration: none;
  }
`
