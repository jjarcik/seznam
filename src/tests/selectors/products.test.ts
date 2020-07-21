import {
  productListSelector,
  productListSelectorFilterd,
  productDetailSelector,
  productFilterParams,
  productFilterName,
} from '../../store/reducers/products/selectors'
import api from '../../api.json'

const state = {
  products: {
    items: api.products,
  },
  filter: {
    name: 'not existing',
    touchscreen: 'yes',
  },
}

test('selector returns all products from state', () => {
  expect(productListSelector(state)).toBe(state.products.items)
})

test('selector with filter returns empty array for non existing name', () => {
  expect(productListSelectorFilterd(state)).toHaveLength(0)
})

test('selector with filter returns empty array for non existing name', () => {
  const state2 = { ...state, filter: { name: 'Nokia' } }
  const expected = [api.products[1], api.products[8]]
  expect(productListSelectorFilterd(state2)).toHaveLength(2)
  expect(productListSelectorFilterd(state2)).toEqual(expect.arrayContaining(expected))
})

test('one product for existing id is returned', () => {
  expect(productDetailSelector(state, 2)).toBe(api.products[1])
})

test('is true for product with correct params', () => {
  expect(productFilterParams({ os: 'Android' })(api.products[0])).toBe(true)
  expect(productFilterParams({ cores: '7' })(api.products[2])).toBe(true)
})

test('is false for product with incorrect params', () => {
  expect(productFilterParams({ os: 'iOS' })(api.products[0])).toBe(false)
  expect(productFilterParams({ cores: '1' })(api.products[2])).toBe(false)
})

test('is true for product with name like tested string', () => {
  expect(productFilterName('Xiaomi')(api.products[0])).toBe(true)
  expect(productFilterName('Note 10')(api.products[0])).toBe(true)
  expect(productFilterName('XIAOMI')(api.products[0])).toBe(true)
})

test('is false for product with name not like tested string', () => {
  expect(productFilterName('Ksiaomi')(api.products[0])).toBe(false)
})
