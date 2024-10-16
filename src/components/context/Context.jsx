import React, {useState} from 'react'

import "./context.css"

const Context = () => {
  return (
    <div className='context__container' id='context__container'>
      <p>Search for something!</p>
    </div>
  )
}

const ContextElement = (props) => {
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

function ContextElementGroup(elements) {
  const to_return = []
  elements.forEach((element) => {
      const ele = <ContextElement element={element}></ContextElement>
      
      to_return.push(ele);
  });
  return <div className='context__element-container'>{to_return}</div>
}

export {Context, ContextElement, ContextElementGroup};