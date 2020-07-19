import React, { FC } from 'react'

export interface ProductListItemType {
  id: number
  name: string
}

const ProductListItem: FC<ProductListItemType> = ({ name }: ProductListItemType) => <div>{name}</div>

export default ProductListItem
