import {React, useState} from 'react'

import "./SettingsTable.css"

// todo: Implement Cookies and Saving settings.

const handleSubmit = (e, host, port) => {
  e.preventDefault()
  console.log(host, port)
}

const SettingsTable = () => {
  // todo: get the values from cookie
  const [backendHost, setBackendHost] = useState('http://localhost')
  const [backendPort, setBackendPort] = useState(3000)

  return (
    <div className='settings__table'>
      <form className='settings__table-form' onSubmit={(e) => handleSubmit(e, backendHost, backendPort)}>
        <table>
          <tr>
            <td>Backend Host</td>
            <td>
              <input type="text" name="backendHost" defaultValue={backendHost} onChange={(e) => setBackendHost(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>Backend Port</td>
            <td>
              <input type="number" name="backendPort" defaultValue={backendPort} onChange={(e) => setBackendPort(e.target.value)}/>
            </td>
          </tr>
        </table>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default SettingsTable