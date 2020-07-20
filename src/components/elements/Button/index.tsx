import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  text: string
}

const Button: React.FC<ButtonProps> = ({ text }: ButtonProps) => <button className={styles.base}>{text}</button>

export default Button
