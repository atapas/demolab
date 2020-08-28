import React, { useState, useEffect } from "react";
import FeatureSupport from "../../components/utils/feature-support";

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
        <>
            <FeatureSupport
                support={supported}
                feature={"ResizeObserver"}
                caniuseLink={"https://caniuse.com/#feat=mdn-api_resizeobserver"}
            />

        </>
        
    )
}