import React from "react";
import Iframe from 'react-iframe';

export default () => {
    return(
       <Iframe url="https://keyevents.netlify.app/"
        width="100%"
        height="700px"
        id="js-keyevents-pg-id"
        display="initial"
        position="relative"/>
    )
}