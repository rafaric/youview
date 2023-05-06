import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  body{
  max-width: 100vw;
  box-sizing: border-box;
  margin: 0 auto;
    height: 100%;
    background: rgb(5,0,88);
    background: linear-gradient(180deg, rgba(5,0,88,0.40379901960784315) 0%, rgba(255,255,255,1) 51%);
  }
  .app{
    width: 100vw;
  }
  `;

export default GlobalStyle;
