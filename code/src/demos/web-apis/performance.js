import React, { useState, useEffect } from "react";
import FeatureSupport from "../../components/utils/feature-support";
import _ from 'lodash';
import UnderConstruction from '../../components/utils/under-construction';
const pretty = require('prettysize');
var moment = require('moment');


export default () => {
    const pretty = require('prettysize');
    const [supported, setSupported] = useState(false);
    const [memoryData, setMemoryData] = useState();
    const [navigationData, setNavigationData] = useState();
    
    useEffect(() => {
        if (performance) {
            setSupported(true);
            setMemoryData(performance.memory);
            setNavigationData(performance.getEntriesByType("navigation"));
        } else {
            setSupported(false);
        }
    },[]);


    const renderNavogationInfo = () => {
        if (supported) {
            console.log(navigationData[0]);
        }
    }

    return(
        <>
        {/*
            <FeatureSupport
                support={supported}
                feature={"Performance"}
                caniuseLink={"https://caniuse.com/#feat=mdn-api_performance"}
            />
            <div className="column">
                <div className="perf-memory">
                    <h3>Memory Information</h3>
                    { memoryData && 
                        <ul>
                            <li>
                                <span>
                                    jsHeapSizeLimit(The maximum size of the heap that is available to the context):
                                </span> {' '}
                                <span>
                                    <u>{ pretty(memoryData.jsHeapSizeLimit) }</u>
                                </span>
                            </li>
                            <li>
                                <span>
                                    usedJSHeapSize(The currently active segment of JS heap):
                                </span> {' '}
                                <span>
                                    <u>{ pretty(memoryData.usedJSHeapSize) }</u>
                                </span>
                            </li>
                            <li>
                                <span>
                                    totalJSHeapSize(The total allocated heap size):
                                </span> {' '}
                                <span>
                                    <u>{ pretty(memoryData.totalJSHeapSize) }</u>
                                </span>
                            </li>
                        </ul>
                    }
                </div>
            </div>
            */}
            <UnderConstruction />
        </>
    )
}