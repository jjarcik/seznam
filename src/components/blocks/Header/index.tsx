import React from 'react'
import Logo from '../../elements/Logo'
import styles from './Header.module.css'

const Header: React.FC = () => (
  <header className={styles.header}>
    <Logo />
  </header>
)

export default Header
