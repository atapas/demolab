import React from "react"
import Iframe from 'react-iframe'
import { generate } from "shortid"

const DemoFromURL = props => {
  const URL = props.url
  const ID = props.id
  return (
    <Iframe
      url={URL}
      width="100%"
      height="700px"
      id={generate()}
      display="initial"
      position="relative"
    />
  )
}

export default DemoFromURL
