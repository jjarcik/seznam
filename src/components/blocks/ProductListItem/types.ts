import { ProductParams } from '../../../store/reducers/products/types'

export interface ProductListItemType {
  id: number
  name: string
  image: string
  price: string
  perex: string
  params: ProductParams
}
