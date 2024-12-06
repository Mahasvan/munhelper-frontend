import React from 'react'

import Logo from "../../assets/logo.svg";
import GearIcon from "../../assets/gear_icon.svg";
import { Link } from 'react-router';

import "./header.css";

const Header = () => {
  return (
    <div className='header'>

      <Link to="/">
        <div className="header__left">
          <div className="header__left-logo">
            <img src={Logo} alt="MUNHelper Logo" />
          </div>
          <div className="header__left-title">
            MUNHelper
          </div>
        </div>
      </Link>

      <div className="header__right">
        <Link to="/settings" className='header__right-settings'>
          <img src={GearIcon} title='Settings' alt='Settings'></img>
        </Link>

        <button className='header__right-button' onClick={() => {
          window.open("https://github.com/Mahasvan/MunHelper", '_blank')
        }}>
          Source
        </button>
      </div>

    </div>
  )
}

export default Header