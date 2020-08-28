import React, { useState, useEffect } from "react";
import FeatureSupport from "../../components/utils/feature-support";
import Emoji from '../../components/utils/emoji';

import demoStyles from '../demo.module.css';

export default () => {
    const [supported, setSupported] = useState(false);
    const [information, setInformation] = useState();

    useEffect(() => {
        let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        setInformation(connection);
        if (connection) {
            setSupported(true);
        } else {
            setSupported(false);
        }
    }, []);

    return(
        <>
      
            <FeatureSupport
                support={supported}
                feature={"Network Information API"}
                caniuseLink={"https://caniuse.com/#feat=mdn-api_networkinformation"}
            />
            {
                supported && 
                <div className="column">
                    <ul>
                        <li>
                            <Emoji label="Backhand Index Pointing Right" symbol="pointing-right-hand"/>
                            <span><b>Network Type:</b></span> { ' '} <span>{information.effectiveType}</span>
                        </li>
                        <li>
                            <Emoji label="Backhand Index Pointing Right" symbol="pointing-right-hand"/>
                            <span><b>Round Trip Time(rtt):</b></span> { ' '} <span>{information.rtt}</span>
                        </li>
                        <li>
                            <Emoji label="Backhand Index Pointing Right" symbol="pointing-right-hand"/>
                            <span><b>Bandwidth estimate(in MBPS):</b></span> { ' '} <span>{information.downlink}</span>
                        </li>
                        <li>
                            <Emoji label="Backhand Index Pointing Right" symbol="pointing-right-hand"/>
                            <span><b>Max Bandwidth estimate(in MBPS):</b></span> { ' '} <span>{information.downlinkMax}</span>
                        </li>
                        <li>
                            <Emoji label="Backhand Index Pointing Right" symbol="pointing-right-hand"/>
                            <span><b>Save data enabled:</b></span> { ' '} <span>{information.saveData? 'true' : 'false'}</span>
                        </li>
                        <li>
                            <Emoji label="Backhand Index Pointing Right" symbol="pointing-right-hand"/>
                            <span><b>Device Connection Type:</b></span> { ' '} <span>{information.type}</span>
                        </li>
                    </ul>
                </div>
            }
            
        </>
    )
}