import React from 'react'
import InputWrapper from '../../blocks/InputWrapper'
import styles from './Select.module.css'

type Option = {
  label: string | number
  value: string | number
}

interface SelectProps {
  name: string
  label: string
  options: Option[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  value?: string | number | null | undefined
}

const Select: React.FC<SelectProps> = ({ label, options, name, onChange, value }: SelectProps) => (
  <InputWrapper label={label}>
    <select name={name} onChange={onChange} value={value || ''} className={styles.base}>
      <option value="">Vyberte hodnotu</option>
      {options.map((v, k) => (
        <option key={k} value={v.value || ''}>
          {v.label}
        </option>
      ))}
    </select>
  </InputWrapper>
)

export default Select
