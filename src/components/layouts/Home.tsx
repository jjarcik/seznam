import React from 'react'
import styles from './Home.module.css'

interface HomeLayoutProps {
  children: React.ReactNode
}

const Home: React.FC<HomeLayoutProps> = ({ children }: HomeLayoutProps) => {
  return <div className={styles.base}>{children}</div>
}

export default Home
