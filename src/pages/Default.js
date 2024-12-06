import React from 'react'

import "./Default.css"

import Sidebar from '../components/sidebar/Sidebar';
import Main from '../components/main/Main';

const Default = () => {
    return (
        <div className='content' id='content'>
            <div className='content__left'>
                <Sidebar />
            </div>
            <div className='content__right' id='content__right'>
                <Main />
            </div>
        </div>
    )
}

export default Default