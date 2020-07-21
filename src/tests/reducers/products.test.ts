import reducer from '../../store/reducers/products/reducer'
import api from '../../api.json'

const action = {
  type: '@@products/PRODUCT_LIST_INIT',
  payload: {
    items: api.products,
  },
}

const action2 = {
  type: '@@products/PRODUCT_INIT',
  payload: {
    items: api.products[0],
  },
}

const initialState = {
  items: [],
}

test('products items are inserted to redux store', () => {
  const newState = reducer(initialState, action)
  expect(newState.items).toBe(api.products)
})

test('products items are inserted to redux store', () => {
  expect(initialState.items).toHaveLength(0)
  const newState = reducer(initialState, action2)
  expect(newState.items).toHaveLength(1)
  // insert same product as we already have (same id)
  const newState2 = reducer(newState, action2)
  expect(newState2.items).toHaveLength(1)
})
