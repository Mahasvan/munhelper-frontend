import React from 'react'

import logo from "../../assets/logo.svg";

import "./header.css";

const Header = () => {
  return (
    <div className='header'>
      <div className="header__left">
        <div className="header__left-logo">
          <img src={logo} alt="MUNHelper Logo" />
        </div>
        <div className="header__left-title">
          MUNHelper
        </div>
      </div>
      <div className="header__right">
        <button className='header__right-button' onClick={() => {
          window.open("https://github.com/Mahasvan/MunHelper", '_blank')
        }}>
          Source Code
        </button>
      </div>
    </div>
  )
}

export default Header