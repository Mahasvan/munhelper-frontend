import React from 'react'
import Searchbox from '../searchbox/Searchbox'
import Response from '../response/Response'

import "./main.css"

const Main = () => {
  return (
    <div className="main__container" id ='main__container'>
        {Searchbox()}
        <Response />
    </div>

  )
}

export default Main