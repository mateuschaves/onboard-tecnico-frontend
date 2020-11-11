import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Home from './'

test('render with title', async () => {
  const { getByText } = render(<Home />)
  const title = getByText(/Olá, o que deseja acesssar ?/)
  expect(title).not.toBe(null)
})
