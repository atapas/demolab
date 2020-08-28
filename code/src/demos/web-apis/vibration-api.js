import React, { useState, useEffect } from "react";
import FeatureSupport from "../../components/utils/feature-support";
import StyledButton from '../../components/styled/styled-button';
import UnderConstruction from "../../components/utils/under-construction";

export default () => {

    const [supported, setSupported] = useState(false);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (navigator.vibrate) {
            setSupported(true);
        } else {
            setSupported(false);
        }
    },[]);

    useEffect(() => {
        if (start) {
            navigator.vibrate(2000);
        } else {
            navigator.vibrate(0);
        }
    }, [start]);

    const manageVibration = () => {
        setStart(!start);
    }

    return(

        <>{/*
            <FeatureSupport
            support={supported}
            feature={"Vibration API"}
            caniuseLink={"https://caniuse.com/#feat=vibration"}
            />
            {
                supported && 
                <div className="column">
                    <p>
                        The Vibration API works best on mobiles, tablets etc. It may not do 
                        anything on desktops even when the browser supports.
                    </p>
                    <StyledButton onClick={manageVibration}>{ start ? 'Stop Vibration' : 'Start Vibration'}</StyledButton>
                </div>
            }
            */}
            <UnderConstruction />
        </>
        
    )
}