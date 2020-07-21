import { Reducer } from 'redux'
import { ProductsState, ProductsActions } from './types'

export const initialState: ProductsState = {
  items: [],
}

const reducer: Reducer<ProductsState> = (state: ProductsState = initialState, action) => {
  switch ((action as ProductsActions).type) {
    case '@@products/PRODUCT_LIST_INIT':
      return { ...state, items: action.payload.items }
    case '@@products/PRODUCT_INIT':
      const newState = { ...state }
      const existingProduct = state.items.findIndex((p) => p.id === action.payload.id)
      if (existingProduct >= 0) {
        newState.items[existingProduct] = action.payload
      } else {
        newState.items.push(action.payload)
      }
      return newState
    default:
      return state
  }
}

export default reducer
