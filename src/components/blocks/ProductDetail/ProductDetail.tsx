import React from 'react'
import { ProductDetilType } from './types'
import { H1 } from '../../elements/Heading'
import styles from './ProductDetail.module.css'

const ProductDetail: React.FC<ProductDetilType> = ({ name, image, text, params }: ProductDetilType) => (
  <article className={styles.base}>
    <section className={styles.images}>
      <img src={image} alt={name} />
    </section>
    <section>
      <H1>{name}</H1>
      <p>{text}</p>
      {params && (
        <table>
          <tbody>
            <tr>
              <td>Počet jader:</td>
              <td>{params.cores}</td>
            </tr>
            <tr>
              <td>Operační systém:</td>
              <td>{params.os}</td>
            </tr>
            <tr>
              <td>Dotyková obrazovka:</td>
              <td>{params.touchscreen}</td>
            </tr>
            <tr>
              <td>Velikost obrazovky:</td>
              <td>{params.screen}</td>
            </tr>
            <tr>
              <td>Operační paměť:</td>
              <td>{params.memory}</td>
            </tr>
          </tbody>
        </table>
      )}
    </section>
  </article>
)

export default ProductDetail
