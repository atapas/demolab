import React from "react"
import Iframe from 'react-iframe'
import { generate } from "shortid"
import styled from "styled-components"
import { ArrowUpRight } from 'react-feather'


const StyledAnchorBtn = styled.a`
  background-color: ${({ theme }) => theme.colors.button.background};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.button.text};
  padding: 0.6rem;
  font-size:0.8rem;
  border-radius: .25rem;
  text-decoration: none;
  cursor: pointer;
`;

const DemoFromURL = props => {
  const URL = props.url
  const ID = props.id
  return (
    <>
      <StyledAnchorBtn
        style={{float:'right', marginBottom: '10px'}} 
        href={ URL } 
        target="_blank" 
        rel="noreferrer">
        <ArrowUpRight size={16} /> 
        Open Demo in a New Tab
      </StyledAnchorBtn>
      <Iframe
        url={URL}
        width="100%"
        height="700px"
        id={generate()}
        display="initial"
        position="relative"
      />
    </>
  )
}

export default DemoFromURL
