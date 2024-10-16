import React from 'react'
import Searchbox from '../searchbox/Searchbox'
import Response from '../response/Response'

import "./main.css"

const Main = () => {
  return (
    <div className="main_container">
      {Searchbox()}
      <Response />
    </div>

  )
}

export default Main