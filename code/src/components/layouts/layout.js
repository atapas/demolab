import React from "react";
import { lightTheme, darkTheme } from '../../theme/theme';
import Header from './header';
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../../theme/globalStyles";
import { useDarkMode } from "../../theme/useDarkMode";
import Toggle from "../../theme/Toggler";

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

  const Container = styled.div`
    max-width: 90%;
    margin: 1rem 1.5rem auto 1.5rem;
  `;

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>;
  
  return (
    <ThemeProvider theme={ themeMode }>
      <>
        <GlobalStyles/>
        <Container>
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Header title={data.site.siteMetadata.title}/>
          {children}
        </Container>
      </>
    </ThemeProvider>
  )
}