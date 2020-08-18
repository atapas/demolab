import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

import FeatureSupport from "../../components/utils/feature-support";

import DemoStyles from '../demo.module.css';
import santa from './fullscreen/santa.png';

export default () => {
    const [supported, setSupported] = useState(false);
    
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
                <div className={DemoStyles.column}>
                    <img id="fs_id" src={santa} alt="santa" width={300} height={300}/>
                    <Button onClick={manageFullscreen}>Enter Fullscreen</Button>
                </div>
            }
        </>
        
    )
}