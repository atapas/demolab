import React from "react";
import Header from './header';
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import _ from 'lodash';
import { GlobalStyles } from "../../theme/globalStyles";
import { lightTheme } from "../../theme/theme";


const Container = styled.div`
  max-width: 90%;
  margin: 1rem auto auto auto;
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

  const localTheme = typeof window !== 'undefined' && window.localStorage.getItem('theme');

  const themeMode = _.isNull(localTheme) ? lightTheme : JSON.parse(localTheme);

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