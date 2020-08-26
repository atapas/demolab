import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import _ from 'lodash';
import shortid from 'shortid';

import Feature from './feature';

export default function FeatureList(props) {
  const COLUMN_NUMBER = 3;
  console.log(props.data);
  const edges = props.data.edges;
  
  const brokenEdges = _.chunk(edges, COLUMN_NUMBER);
  console.log(brokenEdges);

  return (
    <Container>
      {
        brokenEdges && brokenEdges.length > 0 &&
        brokenEdges.map((edge, index) => (
          <Row key={shortid.generate()}>
            {
              edge.map((featue, findex) =>(
                <Col sm key={shortid.generate()}>
                  <Feature data={featue} key={index}/>
                </Col>
              ))
            }
          </Row>
        ))
      }
    </Container>
  )
}
