import React from 'react'
import InputWrapper from '../../blocks/InputWrapper'
import styles from './Input.module.css'

interface InputProps {
  label: string
  type: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number | null | undefined
}

const Input: React.FC<InputProps> = ({ label, type, name, onChange, value }: InputProps) => (
  <InputWrapper label={label}>
    <input type={type} name={name} onChange={onChange} value={value || ''} className={styles.base}/>
  </InputWrapper>
)

export default Input
