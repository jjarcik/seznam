import { ActionCreator } from 'redux'
import { ProductListInitAction, Product } from './types'

// Type these action creators with `: ActionCreator<ActionTypeYouWantToPass>`.
// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly.

export const initProductList: ActionCreator<ProductListInitAction> = (items: Product[]) => ({
  type: '@@products/PRODUCT_LIST_INIT',
  payload: {
    items,
  },
})
