import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Preview = props => {
    const data = props.data;

    console.log({data});

    return(
        <div>
            { 
                data.fullName && 
                <h2>Hey <u>{data.fullName}!</u> Welcome to this Demo.</h2>
            }

            { 
                data.email && 
                <p>Thanks for giving us your email id: <a>{data.email}</a></p>
            }

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
    checkMe: ""
  }

  const [state, setState] = useState(defaultObj)

  const handleChange = evt => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })

    console.log(state);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control placeholder="Who are you?" name="fullName" onChange={handleChange}/>
            </Form.Group>  
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} autoComplete="off"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password"  onChange={handleChange} autoComplete="off"/>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} name="address"  onChange={handleChange} placeholder="Where can we find you?"/>
            </Form.Group>

            <Form.Group controlId="favColor">
              <Form.Label>Your Favorite Color</Form.Label>
              <Form.Control type="color" name="color" onChange={handleChange}/>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control name="city" onChange={handleChange}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose..." name="state"  onChange={handleChange}>
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="number" name="zip" onChange={handleChange}/>
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" name="checkMe" onChange={handleChange}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
            <Preview data={state} />
        </Col>
      </Row>
    </Container>
  )
}
