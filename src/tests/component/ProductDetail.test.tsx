import React from 'react'
import { render } from '@testing-library/react'
import ProductDetail from '../../components/blocks/ProductDetail/ProductDetail'

test('ProductDetail - name and text is rendered ', () => {
  const { getByText } = render(<ProductDetail name="abc" image="image" text="description of product" />)
  const name = getByText(/abc/i)
  const text = getByText(/description of product/i)
  expect(name).toBeInTheDocument()
  expect(text).toBeInTheDocument()
})

