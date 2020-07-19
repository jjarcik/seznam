import { Reducer } from 'redux'
import { ProductsState, ProductsActions } from './types'

export const initialState: ProductsState = {
  items: [],
}

const reducer: Reducer<ProductsState> = (state: ProductsState = initialState, action) => {
  switch ((action as ProductsActions).type) {
    case '@@products/PRODUCT_LIST_INIT':
      return { ...state, items: action.payload.items }
    default:
      return state
  }
}

export default reducer
