import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import CardDeck from "react-bootstrap/CardDeck"
import Feature from './feature';

export default function FeatureList(props) {
  console.log(props.data);
  const totalCount = props.data.totalCount;
  const edges = props.data.edges;

  return (
    <CardDeck>
      {
        edges && edges.length > 0 &&
        edges.map((edge, index) => (
          <Feature data={edge} key={index}/>
        ))
      }
    </CardDeck>
  )
}
