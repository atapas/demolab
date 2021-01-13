import React, { useState, useEffect } from "react";
import FeatureSupport from '../../components/utils/feature-support';
import StyledButton from '../../components/styled/styled-button';

export default () => {
    const [supported, setSupported] = useState(false);
    const [deviceName, setDeviceName] = useState();
    const [deviceId, setDeviceId] = useState();
    const [deviceConnected, setDeviceConnected] = useState(false);
    const [error, setError] = useState(false);
   
    useEffect(() => {
        if (navigator.bluetooth) {
            setSupported(true);
        } else {
            setSupported(false);
        }
    },[]);

    const askToConnect = () => {
        navigator.bluetooth.requestDevice({
            acceptAllDevices: true
        }).then(device => {            
            setDeviceName(device.name);
            setDeviceId(device.id)
            setDeviceConnected(device.connected);
        }).catch(err => {
            console.log(err);
            setError(true);
        })
    }

    return (
      <>
        <FeatureSupport
          support={supported}
          feature={"Bluetooth API"}
          caniuseLink={"https://caniuse.com/#feat=mdn-api_bluetooth"}
        />

        {supported && (
          <div className="column">
            <StyledButton onClick={askToConnect}>
              Connect to a Device
            </StyledButton>
            <br />
            {error ? (
              <h2>Something gone wrong! See browser console</h2>
            ) : (
              <>
                <h3>Connected device info</h3>
                <span>Device name: {deviceName}</span>
                <span>Device id: {deviceId}</span>
                <span>Is Connected: {deviceConnected}</span>
              </>
            )}
          </div>
        )}
      </>
    )
}