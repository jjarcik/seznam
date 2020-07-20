import React, { FC } from 'react'
import get from 'lodash/get'
import styles from './ProductListItemParams.module.css'
import { ProductParams } from '../../../store/reducers/products/types'

interface ProductListItemParamsProps {
  params: ProductParams
}

const visibleParams = [
  { key: 'os', label: 'Operační systém' },
  { key: 'cores', label: 'Počet jader procesoru' },
]

const ProductListItemParams: React.FC<ProductListItemParamsProps> = ({ params }: ProductListItemParamsProps) => (
  <ul className={styles.base}>
    {visibleParams.map((param, index) => (
      <li key={`param-${index}`}>
        {param.label}: {get(params, param.key)}
      </li>
    ))}
  </ul>
)

export default ProductListItemParams
