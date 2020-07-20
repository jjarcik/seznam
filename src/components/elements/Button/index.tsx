import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  text: string
  fluid?: boolean
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onClick, fluid = true }: ButtonProps) => (
  <button className={[styles.base, fluid ? styles.fluid : ''].join(' ')} onClick={onClick}>
    {text}
  </button>
)

export default Button
