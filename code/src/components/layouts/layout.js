import React from "react";
import { lightTheme, darkTheme } from '../../theme/theme';
import Header from './header';
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../../theme/globalStyles";
import { useDarkMode } from "../../theme/useDarkMode";

const Container = styled.div`
  max-width: 90%;
  margin: 1rem 1.5rem auto 1.5rem;
`;

export default function Layout({ children }) {
  const data = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
  );

  const localTheme = window.localStorage.getItem('theme');
  const themeMode = localTheme === 'light' ? lightTheme : darkTheme;


  return (
    <ThemeProvider theme={ themeMode }>
      <>
        <GlobalStyles/>
        <Container>
          <Header title={data.site.siteMetadata.title}/>
          {children}
        </Container>
      </>
    </ThemeProvider>
  )
}