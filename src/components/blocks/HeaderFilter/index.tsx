import React from 'react'
import styles from './HeaderFilter.module.css'

interface HeaderFilterProps {
  children: React.ReactNode
}

const HeaderFilter: React.FC<HeaderFilterProps> = ({ children }: HeaderFilterProps) => (
  <header className={styles.base}>{children}</header>
)

export default HeaderFilter
