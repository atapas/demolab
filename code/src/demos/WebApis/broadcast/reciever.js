import React from "react";
import DemoStyles from '../../demo.module.css';

export default () => {

    const CHANNEL_NAME = "greenroots_channel";
    const bc = new BroadcastChannel(CHANNEL_NAME);
    
    bc.addEventListener('message', function(event) {
        console.log(`Received message, "${event.data}", on channel, "${CHANNEL_NAME}"`);
        const output = document.getElementById('msg');
        output.innerText = event.data;
    });

    return(
        <div className={DemoStyles.senderReciever}>
            <h4>Reciever</h4>
            <span id="msg"></span>
        </div>
        
    )
}