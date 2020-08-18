import React from "react";
import Button from 'react-bootstrap/Button';

import BroadcastStyles from '../broadcast.module.css';

export default () => {

    const CHANNEL_NAME = "greenroots_channel";
    const bc = new BroadcastChannel(CHANNEL_NAME);
    const message = 'I am wonderful!';

    const sendMessage = () => {
        bc.postMessage(message);
    }

    return(
        <div className={BroadcastStyles.senderReciever}>
            <h4>Sender</h4>
            <Button onClick={sendMessage}>Send Message</Button>

        </div>
        
    )
}