import { Action } from 'redux'

export interface ProductsState {
  items: Product[]
}

export interface Product {
  name: string
  id: number
  image: string
  price: string
  perex: string
  text: string
  params: ProductParams
}

export interface ProductParams {
  cores?: number
  touchscreen?: 'yes' | 'no'
  os?: 'android' | 'ios' | 'Nokia OS'
}

export interface ProductListInitAction extends Action {
  type: '@@products/PRODUCT_LIST_INIT'
  payload: {
    items: Product[]
  }
}

export interface ProductInitAction extends Action {
  type: '@@products/PRODUCT_INIT'
  payload: Product
}

export type ProductsActions = ProductListInitAction | ProductInitAction
