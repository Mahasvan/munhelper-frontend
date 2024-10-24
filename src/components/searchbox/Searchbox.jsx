import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';
import { ContextElementGroup } from '../context/Context'

import Schema from "../../assets/schema.json"

import "./searchbox.css"


const Searchbox = () => {
  const [query, setQuery] = useState("")
  const [generate, setGenerate] = useState(false);
  function render_response(data, responseElementRoot) {
    responseElementRoot.render(data);
  }

  async function handle_query(e) {
    e.preventDefault();

    const response = await fetch(`${Schema["search_resos"]}${query}`).then(response => response.json());
    const response_box = document.getElementById("context__container");

    const root = createRoot(response_box);
    root.render(ContextElementGroup(response));

    if (generate) {
      const generated_box = document.getElementById('response__content')
      const generate_root = createRoot(generated_box)
      generate_root.render("Waiting for response...")

        const response = await fetch(`${Schema["chat_resos"]}${query}`)
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let text = ''
        
        while (true) {
          const {done, value} = await reader.read();
          if (done) break;
          text += decoder.decode(value);
          render_response(text, generate_root);
        }
      }
    }

    async function toggle_llm_visibility(e) {
      console.log(e)
      console.log(e.target.checked)
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
              <input type="text" placeholder="Enter a query..." name="query" onChange={(e) => setQuery(e.target.value)}/>
              <button type="submit">Search</button>
            </div>
            <div className='searchbox__form-bottom'>
              <input type='checkbox' id='generateLLMSummary' name='generateLLMSummary' defaultChecked={true} onChange={(e) => {
                setGenerate(e.target.checked)
                toggle_llm_visibility(e)}}/>
              <label htmlFor='generateLLMSummary'>Generate LLM Summary</label>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Searchbox