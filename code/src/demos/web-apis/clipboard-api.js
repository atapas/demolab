import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import _ from 'lodash';
import FeatureSupport from "../../components/utils/feature-support";

const CopyForm = () => {
    const [copyText, setCopytext] = useState();

    async function performCopy() {
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

        <Button variant="primary" 
            onClick={performCopy} 
            disabled={(_.isUndefined(copyText) || _.isNull(copyText))}>
            Copy to Clipboard
        </Button>
        </Form>
    )
};

const PasteForm = () => {

    const [pasteText, setPastetext] = useState();

    async function performPaste() {
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
  
        <Button variant="primary" onClick={performPaste} >
          Paste from Clipboard
        </Button>
      </Form>
    )
};

export default () => {
    const [supported, setSupported] = useState(false);
    
    useEffect(() => {
        if (navigator.clipboard) {
            setSupported(true);
        } else {
            setSupported(false);
        }
    },[]);
    return (
        <>
            <FeatureSupport
                support={supported}
                feature={"Clipboard API"}
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
