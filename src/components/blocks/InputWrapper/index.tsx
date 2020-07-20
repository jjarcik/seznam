import React from 'react'
import styles from './InputWrapper.module.css'

interface InputWrapperProps {
  children: React.ReactNode
  label: string
}

const InputWrapper: React.FC<InputWrapperProps> = ({ children, label }: InputWrapperProps) => (
  <div className={styles.base}>
    <label className={styles.label}>{label}</label>
    {children}
  </div>
)

export default InputWrapper
