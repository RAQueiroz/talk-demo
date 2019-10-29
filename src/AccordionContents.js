import React from 'react'

export default function AccordionContents(props){
  return (
    <div className="card-content">
      <div className="content">
        {props.children}
        <br />
      </div>
    </div>
  )
}