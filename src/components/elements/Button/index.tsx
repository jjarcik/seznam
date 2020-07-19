import React from 'react'

interface ButtonProps {
  text: string
}

const Button: React.FC<ButtonProps> = ({ text }: ButtonProps) => <button>{text}</button>

export default Button
