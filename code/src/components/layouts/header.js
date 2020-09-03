import React from "react";
import StyledLink from '../styled/styled-link';

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <StyledLink to={props.to}>{props.children}</StyledLink>
    </li>
);

export default function Header(props) {
  return (
      <header style={{ marginBottom: `1.5rem` }}>
        <StyledLink to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>{props.title}</h3>
        </StyledLink>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/settings/">Settings</ListLink>
        </ul>
      </header>
  )
}