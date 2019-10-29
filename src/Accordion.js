import React, { Component } from 'react'

import AccordionContents from './AccordionContents'

export default class Accordion extends Component{

  state = { openIndex: 0 }

  setOpenIndex = openIndex => this.setState({openIndex})

  style = { 
    width: '100%',
    backgroundColor: '#fff',
    border: '1px solid #333',
    cursor: 'pointer'
  }

  render(){
    const { openIndex } = this.state
    const { items } = this.props

    return items.map(({title, contents}, index) => (
      <div key={title} className="card">
        <button
          style={this.style}
          className="card-header-title"
          onClick={() => this.setOpenIndex(index)}
        >
          { title }
        </button>
        {
          index === openIndex
          ? <AccordionContents>{ contents }</AccordionContents>
          : null
        }
      </div>
    ))
  }
}
