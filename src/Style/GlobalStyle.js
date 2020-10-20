import {createGlobalStyle} from 'styled-components';
import 'normalize.css';


export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { 
    box-sizing: border-box;
  }
  html {
    font-weight: 400;
    colour: ${({theme}) => theme.colours.newBlack};
    font-size: 1rem;
    line-height: 1.3rem;
  }
  
  body{
    font-family: ${({theme}) => theme.fontFamilies.body};

  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme}) => theme.fontFamilies.heading};
    margin: 0 0 0.3rem;
    // color: ${({ theme }) => theme.colours.desertSand};
  }

   p {
    font-family: ${({theme}) => theme.fontFamilies.paragraph};
    margin: 0 0 5px;
  }
  input {
      color: inherit;
    }
`