import React from 'react'
import styles from './Detail.module.css'

interface DetailLayoutProps {
  children: React.ReactNode
}

const Detail: React.FC<DetailLayoutProps> = ({ children }: DetailLayoutProps) => {
  return <div className={styles.base}>{children}</div>
}

export default Detail
