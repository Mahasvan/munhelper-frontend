import React, { useState} from 'react'
import { createRoot } from 'react-dom/client';

import Schema from "../../assets/schema.json"

import "./searchbox.css"


function ContextElement(props) {
  const [isToggled, setIsToggled] = useState(false)
  const element = props.element
  return (
    <div className='context__element'>
      <button className='context__element-collapsible' onClick={() => setIsToggled(!isToggled)}>
          <div className="context__element-sym">{element.symbol}</div>
          <div className="context__element-date">{element.date}</div>
      </button>
      {isToggled ? <div className='context__element-content'>
        <div className='context__element-content-title'>{element.title}</div>
        <div className='context__element-content-text'>{element.document}</div>
      </div> : null}
    </div>
  )
}


function BetterContextElement(elements) {
    const to_return = []
    elements.forEach((element) => {
        const ele = <ContextElement element={element}></ContextElement>
        
        to_return.push(ele);
    });
    return <div className='context__element-container'>{to_return}</div>
}

const Searchbox = () => {
    const [query, setQuery] = useState("")
    const [generate, setGenerate] = useState(false);
    function render_response(data, responseElementRoot) {
      responseElementRoot.render(data);
    }

    async function handle_query(e) {        
      e.preventDefault();
      console.log(Schema.search_resos)
      const response = await fetch(`${Schema["search_resos"]}${query}`).then(response => response.json());
      const response_box = document.getElementById("context__container");
      console.log(response);
      const root = createRoot(response_box);
      root.render(BetterContextElement(response));
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
              <input type="text" placeholder="Search" name="query"
              onChange={(e) => setQuery(e.target.value)}/>
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