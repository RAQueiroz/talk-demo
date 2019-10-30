import React, { useState } from 'react'
import AccordionContents from './AccordionContents'

const style = { 
  width: '100%',
  backgroundColor: '#fff',
  border: '1px solid #333',
  cursor: 'pointer'
}

export default function Accordion({items}){
  const [openIndex, setOpenIndex] = useState(0)

  return items.map(({title, contents}, index) => (
    <div key={title} className="card">
      <button
        style={style}
        className="card-header-title"
        onClick={() => setOpenIndex(index)}
      >
        {title}
      </button>
      {
        index === openIndex
        ? (
          <AccordionContents>
            { contents }
          </AccordionContents>
        )
        : null
      }
    </div>
  ))
}

