import React from 'react'
import ProductListItem, { ProductListItemType } from '../ProductListItem'

interface ListProps {
  items: ProductListItemType[]
}

const List: React.FC<ListProps> = ({ items }: ListProps) => (
  <>
    {items.map((item) => (
      <ProductListItem key={item.id} name={item.name} id={item.id} />
    ))}
  </>
)

export default List
