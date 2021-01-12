import React from "react";
import Iframe from 'react-iframe';

export default () => {
    return(
       <Iframe url="https://html5-tips.netlify.app/"
        width="100%"
        height="700px"
        id="html5-features-id"
        display="initial"
        position="relative"/>
    )
}