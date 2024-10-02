import React from 'react'

import Logo from "../../assets/logo.svg"

import "./response.css"

const Response = () => {
  return (
    <div className='response__container'>
        <div className='response__logo'>
            <img src={Logo} alt='logo'></img>
        </div>  
        <div id="response__content" className='response__content'>
            <span>Enter a query...</span>
        </div>

    </div>
    
  )
}

export default Response