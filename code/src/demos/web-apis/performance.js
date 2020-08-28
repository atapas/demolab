import React, { useState, useEffect } from "react";
import FeatureSupport from "../../components/utils/feature-support";
import _ from 'lodash';

export default () => {
    const [supported, setSupported] = useState(false);
    const [memoryData, setMemoryData] = useState();
    const [navigationData, setNavigationData] = useState();
    const [timeOrigin, setTimeOrigin] = useState();

    useEffect(() => {
        if (performance) {
            setSupported(true);
            setMemoryData(performance.memory);
            setNavigationData(performance.getEntriesByType("navigation"));
            setTimeOrigin(performance.timeOrigin);
        } else {
            setSupported(false);
        }
    },[]);


    return(
        <>
            <FeatureSupport
                support={supported}
                feature={"Performance"}
                caniuseLink={"https://caniuse.com/#feat=mdn-api_performance"}
            />
        </>
    )
}