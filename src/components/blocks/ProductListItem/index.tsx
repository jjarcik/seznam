import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ProductListItemType } from './types'
import style from './ProductListItem.module.css'

const ProductListItem: FC<ProductListItemType> = ({ id, name, image, price, perex }: ProductListItemType) => (
  <article className={style.base}>
    <img src={image} alt={name} className={style.image} />
    <div>
      <Link to={`/detail/${id}`}>{name}</Link>
      <span className={style.price}>{price}</span>
      <p>{perex}</p>
    </div>
  </article>
)

export default ProductListItem
