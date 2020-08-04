import React from "react";
import Header from './header';
import { useStaticQuery, graphql } from "gatsby"

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
    )
  return (
        <div style={{ margin: `3rem auto`, maxWidth: `90%` }}>
            <Header title={data.site.siteMetadata.title}/>
            {children}
        </div>
    )
}