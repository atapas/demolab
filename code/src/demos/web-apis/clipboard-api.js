import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import _ from 'lodash';
import FeatureSupport from "../../components/utils/feature-support";
import StyledButton from '../../components/styled/styled-button';

const CopyForm = () => {
    const [copyText, setCopytext] = useState();

    async function performCopy(event) {
        event.preventDefault();
        try {
            await navigator.clipboard.writeText(copyText);
            console.log('Page URL copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    const textChange = evt => {
        console.log(evt.target.value);
        setCopytext(evt.target.value);
    }

    return (
        <Form style={{margin: '15px'}}>
        <Form.Group controlId="formBasicCopy">
            <Form.Label>Enter some text</Form.Label>
            <Form.Control type="text" placeholder="Just type" onChange={(event) => textChange(event)} />
            <Form.Text className="text-muted" >
            Once typed, hit the copy button.
            </Form.Text>
        </Form.Group>

        <StyledButton 
            onClick={(event) => performCopy(event)} 
            disabled={(_.isUndefined(copyText) || _.isNull(copyText))}>
            Copy to Clipboard
        </StyledButton>
        </Form>
    )
};

const PasteForm = () => {

    const [pasteText, setPastetext] = useState();

    async function performPaste(event) {
        event.preventDefault();
        try {
          const text = await navigator.clipboard.readText();
          setPastetext(text);
          console.log('Pasted content: ', text);
        } catch (err) {
          console.error('Failed to read clipboard contents: ', err);
        }
    }

    return (
      <Form style={{margin: '15px'}}>
        <Form.Group controlId="formBasicCopy">
          <Form.Label>Your text will be pasted</Form.Label>
          <Form.Control type="text" value={pasteText} readOnly/>
          <Form.Text className="text-muted" >
            Just hit the paste button.
          </Form.Text>
        </Form.Group>
  
        <StyledButton onClick={(event) => performPaste(event)} >
          Paste from Clipboard
        </StyledButton>
      </Form>
    )
};

export default () => {
    const [supported, setSupported] = useState(false);
    
    useEffect(() => {
        if (navigator.clipboard 
            && navigator.clipboard.read 
            && navigator.clipboard.write) {
            setSupported(true);
        } else {
            setSupported(false);
        }
    },[]);
    return (
        <>
        
            <FeatureSupport
                support={supported}
                feature={"Clipboard Async API"}
                caniuseLink={"https://caniuse.com/#feat=mdn-api_clipboard_read"}
            />
            {
                supported && 
                <div className="row">
                    <CopyForm />
                    <PasteForm />
                </div>
            }
        </>
    )
}
