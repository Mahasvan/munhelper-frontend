import React from 'react'

import "./footer.css"

import InstagramLogo from "../../assets/instagram.svg"
import LinkedinLogo from "../../assets/linkedin.svg"
import GithubLogo from "../../assets/github.svg"

const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer__left'>
            <div className='footer__made-with-love'>Made with 💖 by </div>
            <div className='footer__name'>
                <a href="https://github.com/Mahasvan/">Mahasvan</a>
            </div>
        </div>
        
        <div className='footer__right'>
            <div className='footer__right-entry'>
                <div className='footer__right-entry_title'>Socials!</div>
                    <div className='footer__right-entry_links'>
                        <a href='https://instagram.com/mahasvan.exe'>
                            <img src={InstagramLogo} alt='Instagram'></img>
                        </a>
                        <a href='https://www.linkedin.com/in/mahasvan/'>
                            <img src={LinkedinLogo} alt='Linkedin'></img>
                        </a>
                    </div>
                </div>

                <div className='footer__right-entry'>
                    <div className='footer__right-entry_title'>Portfolio</div>
                    <div className='footer__right-entry_links'>
                        <a href='https://github.com/Mahasvan/'>
                            <img src={GithubLogo} alt='GitHub'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer