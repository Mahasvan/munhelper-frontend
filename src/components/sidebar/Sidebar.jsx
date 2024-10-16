import React from 'react'

import "./sidebar.css"
import {Context} from '../context/Context'

const Sidebar = () => {
  return (
    <div className='sidebar_container'>
        <span>Related Documents</span>
        <Context />
    </div>
  )
}

export default Sidebar