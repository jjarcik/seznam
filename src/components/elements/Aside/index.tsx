import React from 'react'
import styles from './Aside.module.css'

interface AsideProps {
  children: React.ReactNode
  isOpen: boolean
}

const Aside: React.FC<AsideProps> = ({ children, isOpen }: AsideProps) => (
  <aside className={[styles.aside, isOpen ? styles.open : styles.close].join(' ')}>{children}</aside>
)

export default Aside
