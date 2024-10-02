import React from 'react'

import "./sidebar.css"
import Context from '../context/Context'

const Sidebar = () => {
  return (
    <div className='sidebar_container'>
        <span>Context</span>
        <Context />
    </div>
  )
}

export default Sidebar