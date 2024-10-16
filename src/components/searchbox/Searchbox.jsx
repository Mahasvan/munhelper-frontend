import React, { useState} from 'react'
import { createRoot } from 'react-dom/client';
import {ContextElementGroup} from '../context/Context'

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
    
    return (
    <div className='searchbox'>
        <form className='searchbox__form' onSubmit={handle_query}>
            <div className='searchbox__form-top'>
              <input type="text" placeholder="Search" name="query" onChange={(e) => setQuery(e.target.value)}/>
              <button type="submit">Search</button>
            </div>
            <div className='searchbox__form-bottom'>
              <input type='checkbox' id='generateLLMSummary' name='generateLLMSummary' value={true} onChange={(e) => setGenerate(e.target.value)}/>
              <label htmlFor='generateLLMSummary'>Generate LLM Summary</label>
            </div>
        </form>
    </div>
  )
}

export default Searchbox