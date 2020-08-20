import React from "react";
import {ArrowRight} from 'react-feather'

import Sender from './broadcast/sender';
import Reciever from './broadcast/reciever';

export default () => {
    return(
        <>
            <p>
                Click <a href={window.location.href} target="_blank" rel="noreferrer">here</a> to open this page in a new tab. Then 
                hit the <b>Send Message</b> button from one tab to recieve the message in another tab. Try it out, gonna be fun!
            </p>
            <div className="row">
                <Sender />
                <ArrowRight color="white" size={32}/>
                <Reciever />
            </div>
        </>
        
    )
}