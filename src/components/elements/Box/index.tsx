import React from 'react'
import styles from './Box.module.css'

interface BoxProps {
  children?: React.ReactNode
  lgVisible?: boolean
}

const Box: React.FC<BoxProps> = ({ children, lgVisible = true }: BoxProps) => (
  <div className={[lgVisible ? styles.lgVisible : styles.lgHide].join('')}>{children}</div>
)

export default Box
