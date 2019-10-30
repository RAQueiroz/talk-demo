import React from 'react'
import '@testing-library/jest-dom/extend-expect' // 🤨
import { render, fireEvent } from '@testing-library/react' // 🤨
import Accordion from './Accordion'

test('can open accordion items to see the contents', () => {
  const lotr = {title: 'Gandalf - LOTR', contents: 'You shall not pass!'}
  const matrix = { title: 'Neo - The Matrix', contents: 'What is the Matrix ?'}

  const {getByText, queryByText} = render(
    <Accordion items={[lotr, matrix]} />
  )
  
  expect(getByText(lotr.contents)).toBeInTheDocument() // 🤨
  expect(queryByText(matrix.contents)).toBeNull() 
  fireEvent.click(getByText(matrix.title)) // 🤨
  expect(getByText(matrix.contents)).toBeInTheDocument()
  expect(queryByText(lotr.contents)).toBeNull() // 🤨
})