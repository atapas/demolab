import React, { useState, useEffect } from "react";
import WebFont from 'webfontloader';
import Header from './header';
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import _ from 'lodash';
import { GlobalStyles } from "../../theme/globalStyles";
import * as themesFromStore from '../../theme/theme.json';


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
  const themeMode = _.isNull(localTheme) ? themesFromStore.data.light : JSON.parse(localTheme);
  const [font,setFont] = useState(themeMode.font);

 useEffect(() => {
    WebFont.load({
      google: {
        families: [themeMode.font]
      },
      fontinactive: function(familyName, fvd) {setFont('Chilanka')},
      active: function() {setFont(themeMode.font)}
    });
  });
  

  return (
    <ThemeProvider theme={ themeMode }>
      <>
        <GlobalStyles/>
        <Container style={{fontFamily:font}}>
          <Header title={data.site.siteMetadata.title}/>
          {children}
        </Container>
      </>
    </ThemeProvider>
  )
}