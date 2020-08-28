import React, { useState, useEffect } from "react";
import UnderConstruction from "../../components/utils/under-construction";

export default () => {
    const [supported, setSupported] = useState(false);
   
    useEffect(() => {
        if (ResizeObserver) {
            setSupported(true);
        } else {
            setSupported(false);
        }
    },[]);


    return(
        <UnderConstruction />
        
    )
}