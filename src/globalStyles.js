import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-red: #941204;
    --primary-blue: #003884;
    --black: #000;
    --yellow: #edb230;
    --white: #FBFBFB;
    --dark-green: #54a463;
    --light-green: #9ae6a4;
  }

  body {
    margin: auto;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: #000;
    max-width: 500px;
    font-family: 'Starjedi', sans-serif;
  }

  @font-face {
    font-family: 'Starjedi';
    src: url('./fonts/Starjedi.ttf')
  }
`;

export default GlobalStyle;
