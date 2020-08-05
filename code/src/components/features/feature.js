import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from 'gatsby';
import Emoji from '../utils/emoji';

export default function Feature() {
    return (
        <Card 
        bg="dark" 
        text="white"
        style={{ width: '18rem' }}
        className="mb-2">
        <Card.Body>
            <Card.Title><Emoji label="camera" symbol="📷"/> Image Capture API</Card.Title>
            <Card.Text>
            The MediaStream Image Capture API is an API for capturing 
            images or videos from a photographic device. In addition 
            to capturing data, it also allows you to retrieve information 
            about device capabilities such as image size, red-eye reduction 
            and whether or not there is a flash and what they are currently set to. 
            </Card.Text>
            <Emoji label="Backhand Index Pointing Right" symbol="👉"/>
            <Link to="/image-capture">
               Demo
            </Link>
        </Card.Body>
        
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    )
}