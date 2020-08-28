import React from "react";
import Layout from "../components/layouts/layout";
import SEO from '../components/seo';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default () => {
    const imageData = useStaticQuery(
        graphql`
          query {
            twitter: file(relativePath: {eq: "twitter.png"}) {
                childImageSharp {
                    fixed(width: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            },
            website: file(relativePath: {eq: "website.png"}) {
                childImageSharp {
                    fixed(width: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
          }
        `
      );
    return(
        <Layout>
            <SEO title="About" />
            <section>
                <h1>Demolab</h1>
                <p>Demolab is a fantacy project created to understand the power 
                of JAMstack using JavaScript(Reactjs), API(Netlify and Aws) and pre-built Markup(Gatsby).</p>
            </section>
            <br />
            <section>
                <h2>To know more, reach me out @</h2>
                <a href="https://twitter.com/tapasadhikary" target="_blank" rel="noreferrer">
                    <Img fixed={imageData.twitter.childImageSharp.fixed} alt="twitter" />
                </a>
                {'  '}
                <a href="https://tapasadhikary.com" target="_blank" rel="noreferrer">
                    <Img fixed={imageData.website.childImageSharp.fixed} alt="website" />
                </a>
            </section>
        </Layout>
    )
}