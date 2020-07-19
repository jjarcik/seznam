import { Action } from 'redux'

export interface ProductsState {
  items: Product[]
}

export interface Product {
  name: string
  id: number
}

export interface ProductListInitAction extends Action {
  type: '@@products/PRODUCT_LIST_INIT'
  payload: {
    items: Product[]
  }
}

export type ProductsActions = ProductListInitAction
