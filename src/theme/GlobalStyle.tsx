import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    margin: 0;
    font-family: Arial, sans-serif;
  }

  a {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export default GlobalStyle;