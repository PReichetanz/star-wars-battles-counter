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
    --yellow: #FFE81F;
    --white: #FBFBFB;
  }

  body {
    margin: auto;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: #000;
    max-width: 500px;
  }
`;

export default GlobalStyle;
