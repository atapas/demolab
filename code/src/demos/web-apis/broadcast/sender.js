import React from "react";
import StyledButton from '../../../components/styled/styled-button';

import DemoStyles from '../../demo.module.css';

export default () => {

    const CHANNEL_NAME = "greenroots_channel";
    const bc = new BroadcastChannel(CHANNEL_NAME);
    const message = 'I am wonderful!';

    const sendMessage = () => {
        bc.postMessage(message);
    }

    return(
        <div className={DemoStyles.senderReciever}>
            <h4>Sender</h4>
            <StyledButton onClick={sendMessage}>Send Message</StyledButton>

        </div>
        
    )
}