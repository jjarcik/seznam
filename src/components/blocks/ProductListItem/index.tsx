import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import ProductListItemParams from '../ProductListItemParams'
import { ProductListItemType } from './types'
import styles from './ProductListItem.module.css'

const ProductListItem: FC<ProductListItemType> = ({ id, name, image, price, perex, params }: ProductListItemType) => (
  <article className={styles.base}>
    <div className={styles.imageWrapper}>
      <img src={image} alt={name} className={styles.image} />
    </div>
    <div>
      <Link to={`/detail/${id}`} className={styles.name}>
        {name}
      </Link>
      <span className={styles.price}>{price}</span>
      <ProductListItemParams params={params} />
      <p className={styles.perex}>{perex}</p>
    </div>
  </article>
)

export default ProductListItem
