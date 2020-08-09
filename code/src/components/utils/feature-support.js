
import React from "react";
import Alert from 'react-bootstrap/Alert';

const FeatureSupport = props => {
    let type = props.support ? 'success' : 'danger';
    let message = props.support ? `${props.feature} is supported on this browser.` :
                    `${props.feature} is note supported on this browser.`
    return(
        <Alert variant={type}>
            {message} {' '}
            <Alert.Link href={props.caniuseLink} target='_blank' rel="noreferrer">Please see</Alert.Link> for more details.
        </Alert>
    )
};

export default FeatureSupport;