import { ApplicationState } from '../../index'
import { Product } from './types'

export const productListSelector = (state: ApplicationState): Product[] => {
  return state.products.items
}

export const productDetailSelector = (state: ApplicationState, id: number | string): Product | undefined => {
  const products = productListSelector(state)
  const product = products.find((product) => product.id === Number(id))
  return product
}
