import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-red: #c02216;
    --primary-blue: #0042aa;
    --green: #00c767;
    --yellow: #fc9518;
    --white: #f2eeec;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: linear-gradient(0.25turn,#0042aa, #c02216);
  }
`;

export default GlobalStyle;
