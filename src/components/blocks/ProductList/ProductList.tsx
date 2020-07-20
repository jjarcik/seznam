import React from 'react'
import ProductListItem from '../ProductListItem'
import { ProductListItemType } from '../ProductListItem/types'

interface ListProps {
  items: ProductListItemType[]
}

const List: React.FC<ListProps> = ({ items }: ListProps) => (
  <>
    {items.map((item) => (
      <ProductListItem key={item.id} name={item.name} id={item.id} image={item.image} price={item.price} perex={item.perex} />
    ))}
  </>
)

export default List
