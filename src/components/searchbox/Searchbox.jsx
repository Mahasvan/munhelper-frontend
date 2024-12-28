import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';
import { ContextElementGroup } from '../context/Context'
import { useCookies } from 'react-cookie';

import "./searchbox.css"


// Load environment variables
// MUNHELPER_SEARCH_RESOS_URL
// MUNHELPER_CHAT_RESOS_URL
var searchResosURL = process.env.REACT_APP_SEARCH_RESOS_URL
var chatResosURL = process.env.REACT_APP_CHAT_RESOS_URL

const searchResosEndpoint = "/search/ecosoc-resolutions/?query="
const chatResosEndpoint = "/chat/ecosoc-resolutions/?query="


const Searchbox = () => {
  const [query, setQuery] = useState("")
  const [generate, setGenerate] = useState(true);
  const [cookies, ..._] = useCookies(['backendProtocol', 'backendHost', 'backendPort'])
  const backendProtocol = cookies.backendProtocol || 'http'
  const backendHost = cookies.backendHost || 'localhost'
  const backendPort = cookies.backendPort || 5000  
  const searchResosURL = `${backendProtocol}://${backendHost}:${backendPort}${searchResosEndpoint}`
  const chatResosURL = `${backendProtocol}://${backendHost}:${backendPort}${chatResosEndpoint}`

  function render_response(data, responseElementRoot) {
    responseElementRoot.render(data);
  }

  async function handle_query(e) {
    e.preventDefault();

    const response = await fetch(`${searchResosURL}${query}`).then(response => response.json());
    const response_box = document.getElementById("context__container");

    const root = createRoot(response_box);
    root.render(ContextElementGroup(response));

    if (generate) {
      const generated_box = document.getElementById('response__content')
      const generate_root = createRoot(generated_box)
      generate_root.render("Waiting for response...")

      const response = await fetch(`${chatResosURL}${query}`)
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let text = ''

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value);
        render_response(text, generate_root);
      }
    }
  }

  async function toggle_llm_visibility(e) {
    let responseContainerElement = document.getElementById('response__container')
    let mainContainerElement = document.getElementById('main__container')
    let contentContainerElement = document.getElementById('content')
    let contentRightContainerElement = document.getElementById('content__right')

    if (e.target.checked === true) {
      responseContainerElement.classList.remove('response__container-no_llm')
      mainContainerElement.classList.remove('main__container-no_llm')
      contentContainerElement.classList.remove('content__no_llm')
      contentRightContainerElement.classList.remove('content__right-no_llm')
    } else {
      responseContainerElement.classList.add('response__container-no_llm')
      mainContainerElement.classList.add('main__container-no_llm')
      contentContainerElement.classList.add('content__no_llm')
      contentRightContainerElement.classList.add('content__right-no_llm')
    }
  }

  return (
    <div className='searchbox__enclosure'>
      <div className='searchbox'>
        <form className='searchbox__form' onSubmit={handle_query}>
          <div className='searchbox__form-top'>
            <input type="text" placeholder="Enter a query..." name="query" onChange={(e) => setQuery(e.target.value)} />
            <button type="submit">Search</button>
          </div>
          <div className='searchbox__form-bottom'>
            <input type='checkbox' id='generateLLMSummary' name='generateLLMSummary' defaultChecked={generate} onChange={(e) => {
              setGenerate(e.target.checked)
              toggle_llm_visibility(e)
            }} />
            <label htmlFor='generateLLMSummary'>Generate LLM Summary</label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Searchbox