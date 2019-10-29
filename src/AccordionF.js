import React, { useState } from 'react'

export default function Accordion({items}){
  const [openIndex, setOpenIndex] = useState(0)

  return items.map(({title, contents}, index) => (
    <AccordionItem
      key={title}
      isOpen={openIndex === index}
      title={title}
      contents={contents}
      onOpen={() => setOpenIndex(index)}
    />
  ))
}

