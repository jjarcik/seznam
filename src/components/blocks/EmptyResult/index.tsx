import React from 'react'
import styles from './EmptyResult.module.css'

interface EmptyResultProps {
  text: string
}

const EmptyResult: React.FC<EmptyResultProps> = ({ text }: EmptyResultProps) => (
  <div className={styles.base}>
    <span>{text}</span>
  </div>
)

export default EmptyResult
