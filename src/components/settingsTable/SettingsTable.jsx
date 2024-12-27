import { React, useState } from "react";
import { useCookies } from "react-cookie";

import "./SettingsTable.css";

// todo: Implement Cookies and Saving settings.

const handleSubmit = (e, protocol, host, port, setCookie) => {
  e.preventDefault();
  setCookie("backendProtocol", protocol, { path: "/" });
  setCookie("backendHost", host, { path: "/" });
  setCookie("backendPort", port, { path: "/" });
};

const SettingsTable = () => {
  // todo: get the values from cookie
  const [cookies, setCookie, ..._] = useCookies([
    "backendProtocol",
    "backendHost",
    "backendPort",
  ]);
  const [protocol, setProtocol] = useState(cookies.backendProtocol || "http");
  const [backendHost, setBackendHost] = useState(
    cookies.backendHost || "localhost"
  );
  const [backendPort, setBackendPort] = useState(cookies.backendPort || 5000);

  return (
    <div className="settings__table">
      <h1>Settings</h1>
      <form
        className="settings__table-form"
        onSubmit={(e) =>
          handleSubmit(e, protocol, backendHost, backendPort, setCookie)
        }
      >
        <table>
          <tbody>
            <tr>
              <td>Protocol</td>
              <td className="settings__table-form__protocol">
                <label>
                  <input
                    type="radio"
                    id="http"
                    name="protocol"
                    onClick={() => setProtocol("http")}
                    checked={protocol === "http"}
                  ></input>
                  HTTP
                </label>
                <label>
                  <input
                    type="radio"
                    id="https"
                    name="protocol"
                    onClick={() => setProtocol("https")}
                    checked={protocol === "https"}
                  ></input>
                  HTTPS
                </label>
              </td>
            </tr>
            <tr>
              <td>Backend Host</td>
              <td>
                <input
                  type="text"
                  name="backendHost"
                  defaultValue={backendHost}
                  onChange={(e) => setBackendHost(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Backend Port</td>
              <td>
                <input
                  type="number"
                  name="backendPort"
                  defaultValue={backendPort}
                  onChange={(e) => setBackendPort(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Backend URL</td>
              <td className="settings__table-form__backend-url">
                <a href="#" onClick={() => {
                  window.open(`${protocol}://${backendHost}:${backendPort}`, '_blank')
                }}>
                  {protocol}://{backendHost}:{backendPort}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SettingsTable;
