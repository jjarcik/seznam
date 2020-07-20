import React from 'react'
import styles from './Heading.module.css'

interface HeadingProps {
  children: React.ReactNode
}

export const H6: React.FC<HeadingProps> = ({ children }: HeadingProps) => <h6 className={styles.h6}>{children}</h6>
