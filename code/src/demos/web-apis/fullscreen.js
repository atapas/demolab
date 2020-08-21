import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import FeatureSupport from "../../components/utils/feature-support";

export default () => {
    const [supported, setSupported] = useState(false);
    const imageData = useStaticQuery(
        graphql`
          query {
            image: file(relativePath: {eq: "santa.png"}) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
          }
        `
      );
    console.log('imageData', imageData);  
    useEffect(() => {
        if (document.fullscreenEnabled) {
            setSupported(true);
        } else {
            setSupported(false);
        }
    },[]);

    const manageFullscreen = () => {
        document.getElementById('fs_id').requestFullscreen();
    }

    return(
        <>
            <FeatureSupport
                support={supported}
                feature={"Fullscreen API"}
                caniuseLink={"https://caniuse.com/#feat=fullscreen"}
            />
            
            {
                supported && 
                <div className="column">
                    <div id="fs_id">
                        <Img fixed={imageData.image.childImageSharp.fixed} alt="santa" />
                    </div>
                    
                    <Button onClick={manageFullscreen}>Enter Fullscreen with Santa</Button>
                </div>
            }
        </>
        
    )
}