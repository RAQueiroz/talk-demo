import React from 'react'

import items from './items'
import Accordion from './Accordion'

function App() {
  return (
    <section className="section">
      <h1 className="title is-1">
        <span role="img" aria-label="musical keyboard">🎹</span>
        Acordeon
        <span role="img" aria-label="two eighth-notes">🎵</span>
      </h1>
      <br />
      <div className="container">
        <h1 className="title is-2">Citações</h1>
        <Accordion items={items} />
      </div>
    </section>
  )
}

export default App
