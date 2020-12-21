import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import JSONPretty from 'react-json-pretty'
import 'react-json-pretty/themes/acai.css'

const Preview = props => {
    const data = props.data

    return(
        <div>
          <h2>Preview</h2>
          <p>
            This section changes as you change the input element values in the form. See 
            how the JSON is being formed based on the changes. We are grabbing the same JSON 
            data and applying to create some meaningful User Interfaces as well.
          </p>
          <JSONPretty id="json-pretty" data={data}></JSONPretty>
          <div>
            { 
              data.fullName && (
                <h2>Hey <u>{data.fullName}!</u> Welcome to this Demo.</h2>
              )
            }

            { 
              data.email && (
                <p>Thanks for giving us your email id: <a href={data.email}>{data.email}</a></p>
              )
            }

            {
              data.color && (
                <p>Do you know, the Hexacode of your <span style={{color:data.color}}>Favorite Color is: {data.color}</span></p>
              )
            }

            {
              data.address && (
                <span>You stay at, {data.address}</span>
              )
            }

            {
              data.city && (
                <span> {' , '} {data.city}</span>
              )
            }

            {
              data.state && (
                <span>{' , '} {data.state}</span>
              )
            }

            {
              data.zip && (
                <span>{' , '} {data.zip}</span>
              )
            }

            {
              data.checkMe && (
                <p>I just Checked You Out!</p>
              )
            }
          </div>
        </div>    
    )
}

export default () => {
  const defaultObj = {
    fullName: "",
    email: "",
    password: "",
    address: "",
    color: "",
    city: "",
    state: "",
    zip: "",
    checkMe: false
  }

  const [state, setState] = useState(defaultObj)

  const handleChange = evt => {
    const value =
    evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    })
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control autoComplete="nope" placeholder="Who are you?" name="fullName" onChange={handleChange}/>
            </Form.Group>  
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} autoComplete="nope"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password"  onChange={handleChange} autoComplete="new-password"/>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="favColor">
              <Form.Label>Your Favorite Color</Form.Label>
              <Form.Control type="color" name="color" onChange={handleChange} autoComplete="nope"/>
            </Form.Group>

            <Form.Group controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} name="address"  onChange={handleChange} placeholder="Where can we find you?" autoComplete="nope"/>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control name="city" onChange={handleChange} autoComplete="nope"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose..." name="state"  onChange={handleChange}>
                  <option>Choose...</option>
                  <option>Solid</option>
                  <option>Liquid</option>
                  <option>Gas</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="number" name="zip" onChange={handleChange} autoComplete="off"/>
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" checked={state.checkMe} name="checkMe" onChange={handleChange}/>
            </Form.Group>
          </Form>
        </Col>
        <Col>
            <Preview data={state} />
        </Col>
      </Row>
    </Container>
  )
}
