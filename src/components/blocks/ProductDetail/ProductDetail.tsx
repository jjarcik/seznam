import React from 'react'
import { ProductDetilType } from './types'

const ProductDetail: React.FC<ProductDetilType> = ({ name, image, text, params }: ProductDetilType) => (
  <article>
    <h1>{name}</h1>
    <img src={image} alt={name} />
    <p>{text}</p>
    {params && (
      <table>
        <tbody>
          <tr>
            <td>Počet Jader</td>
            <td>{params.cores}</td>
          </tr>
          <tr>
            <td>Operační systém</td>
            <td>{params.os}</td>
          </tr>
          <tr>
            <td>Dotyková obrazovka</td>
            <td>{params.touchscreen}</td>
          </tr>
        </tbody>
      </table>
    )}
  </article>
)

export default ProductDetail
