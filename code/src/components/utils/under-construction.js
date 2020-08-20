// <a href='https://www.freepik.com/vectors/web'>Web vector created by stories - www.freepik.com</a>

import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const UnderConstruction = () => {
    const imageData = useStaticQuery(
        graphql`
          query {
            image: file(relativePath: {eq: "uc.jpg"}) {
                childImageSharp {
                    fixed(width: 500) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
          }
        `
      );

    return(
        <div className="column">
            <Img fixed={imageData.image.childImageSharp.fixed} alt="under construction" />
            <p style={{marginTop:"10px"}}>
                If you are seeing this, I am probably working on it! 
                Please give it a few days to get constructed.
            </p>
        </div>
    )
};

export default UnderConstruction;