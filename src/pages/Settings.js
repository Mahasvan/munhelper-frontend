import React from 'react'

import "./Settings.css"

import SettingsTable from '../components/settingsTable/SettingsTable';

const Settings = () => {
  return (
    <>
    <div className='settings'>
        <div className='settings__container'>
          <SettingsTable />
        </div>
    </div>
    </>
  )
}

export default Settings