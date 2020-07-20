import React from 'react'
import ProductListItem from '../ProductListItem'
import EmptyResult from '../EmptyResult'
import ProductListContainer from '../ProductListContainer'
import { ProductListItemType } from '../ProductListItem/types'

interface ListProps {
  items: ProductListItemType[]
}

const List: React.FC<ListProps> = ({ items }: ListProps) => (
  <ProductListContainer>
    {items.map((item) => (
      <ProductListItem
        key={item.id}
        name={item.name}
        id={item.id}
        image={item.image}
        price={item.price}
        perex={item.perex}
        params={item.params}
      />
    ))}
    {items.length === 0 && <EmptyResult text="Vašim parametrům neodpovídá žádný výsledek" />}
  </ProductListContainer>
)

export default List
