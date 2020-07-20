import { ActionCreator } from 'redux'
import { ProductListInitAction, ProductInitAction, Product } from './types'

export const initProductList: ActionCreator<ProductListInitAction> = (items: Product[]) => ({
  type: '@@products/PRODUCT_LIST_INIT',
  payload: {
    items,
  },
})

export const initProduct: ActionCreator<ProductInitAction> = (product: Product) => ({
  type: '@@products/PRODUCT_INIT',
  payload: product,
})
