import React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import ProductList from '../../components/blocks/ProductList/ProductList'

const items = [
  {
    id: 1,
    name: 'Samsung Galaxy',
    image: 'http://example.com/image/example.jpg',
    price: '150 Kč - 290 Kč',
    perex: 'This is a perex',
    text: 'This is a text',
    params: {
      cores: 7,
    },
  },
  {
    id: 2,
    name: 'iPhone 7',
    image: 'http://example.com/image/example.jpg',
    price: '150 Kč - 290 Kč',
    perex: 'This is a perex',
    text: 'This is a text',
    params: {
      cores: 7,
    },
  },
]

test('ProductList - products are rendered ', () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <ProductList items={items} />
    </Router>,
  )
  const text1 = getByText(/Samsung Galaxy/i)
  const text2 = getByText(/iPhone 7/i)

  expect(text1).toBeInTheDocument()
  expect(text2).toBeInTheDocument()
})
