import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import _ from 'lodash';
import FeatureSupport from "../../components/utils/feature-support";

const CopyForm = () => {
    const [copyText, setCopytext] = useState();

    const performCopy = () => {
        console.log('Copy');
        navigator.clipboard
          .writeText(copyText)
          .then(() => {
            console.log("Text copied to clipboard");
          })
          .catch(err => {
            // This can happen if the user denies clipboard permissions:
            console.error("Could not copy text: ", err);
          })
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

    const performPaste = () => {
        console.log('Paste');
        navigator.clipboard
          .readText()
          .then(text => {
            console.log("Pasted content: ", text);
            setPastetext(text);
          })
          .catch(err => {
            console.error("Failed to read clipboard contents: ", err)
          })
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
