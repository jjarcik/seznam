import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithRedux } from '../helpers'
import ProductDetail from '../../components/blocks/ProductDetail'
import api from '../../api.json'

test('with redux - display text "loading" while fetching data from API', () => {
  const { getByText } = renderWithRedux(<ProductDetail id={1} />)
  expect(getByText(/loading/)).toBeInTheDocument()
})

test('with redux - render product detail with data from API', () => {
  const initialReduxState = {
    products: {
      items: api.products,
    },
  }
  renderWithRedux(<ProductDetail id={1} />, initialReduxState)
  expect(screen.getByText('Xiaomi Mi Note 10')).toBeInTheDocument()
})
