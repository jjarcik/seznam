import React from 'react'
import styles from './ProductListContainer.module.css'

interface ProductListContainerProps {
  children: React.ReactNode
}

const ProductListContainer: React.FC<ProductListContainerProps> = ({ children }: ProductListContainerProps) => (
  <section className={styles.base}>{children}</section>
)

export default ProductListContainer
