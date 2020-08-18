import React from "react";

import Sender from './broadcast/sender';
import Reciever from './broadcast/reciever';

import BroadcastStyles from './broadcast.module.css';

export default () => {
    return(
        <>
            <p>
                Click <a href={window.location.href} target="_blank">here</a> to open this page in a new tab. Then 
                hit the <b>Send Message</b> button from one tab to recieve the message in another tab. Try it out, gonna be fun!
            </p>
            <div className={BroadcastStyles.broadcast}>
                <Sender />
                <Reciever />
            </div>
        </>
        
    )
}