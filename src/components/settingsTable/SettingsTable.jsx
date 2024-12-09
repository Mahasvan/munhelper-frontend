import { React, useState } from 'react'
import { useCookies } from 'react-cookie'

import "./SettingsTable.css"

// todo: Implement Cookies and Saving settings.

const handleSubmit = (e, host, port, setCookie) => {
  e.preventDefault()
  console.log(host, port)
  setCookie('backendHost', host, { path: '/' })
  setCookie('backendPort', port, { path: '/' })
}

const SettingsTable = () => {
  // todo: get the values from cookie
  const [cookies, setCookie, removeCookie] = useCookies(['backendHost', 'backendPort'])
  const [backendHost, setBackendHost] = useState(cookies.backendHost || 'localhost')
  const [backendPort, setBackendPort] = useState(cookies.backendPort || 5000)

  return (
    <div className='settings__table'>
      <h1>Settings</h1>
      <form className='settings__table-form' onSubmit={(e) => handleSubmit(e, backendHost, backendPort, setCookie)}>
        <table>
          <tbody>
            <tr>
              <td>Backend Host</td>
              <td>
                <input type="text" name="backendHost" defaultValue={backendHost} onChange={(e) => setBackendHost(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>Backend Port</td>
              <td>
                <input type="number" name="backendPort" defaultValue={backendPort} onChange={(e) => setBackendPort(e.target.value)} />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default SettingsTable