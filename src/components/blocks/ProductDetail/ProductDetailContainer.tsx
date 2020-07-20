import React from 'react'
import { useSelector } from 'react-redux'
import ProductDetail from './ProductDetail'
import { ApplicationState } from '../../../store/'
import { productDetailSelector } from '../../../store/reducers/products/selectors'
import { ProductDetilProps } from './types'

const ProductContainer: React.FC<ProductDetilProps> = ({ id }: ProductDetilProps) => {
  const product = useSelector((state: ApplicationState) => productDetailSelector(state, id))
  if (!product) {
    return <>loading</>
  }
  return <ProductDetail name={product.name} image={product.image} text={product.text} params={product.params} />
}

export default ProductContainer
