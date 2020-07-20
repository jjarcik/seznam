import { ProductParams } from '../../../store/reducers/products/types'

export interface ProductDetilType {
  name: string
  image: string
  text: string
  params?: ProductParams
}

export interface ProductDetilProps {
  id: string | number
}
