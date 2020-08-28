import { createGlobalStyle} from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Chilanka';
    transition: all 0.50s linear;
  }
  `;
