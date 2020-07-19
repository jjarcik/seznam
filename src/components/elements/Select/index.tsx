import React from 'react'

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
  <div>
    <label>{label}</label>
    <select name={name} onChange={onChange} value={value || ''}>
      <option value="">Vyberte hodnotu</option>
      {options.map((v, k) => (
        <option key={k} value={v.value || ''}>
          {v.label}
        </option>
      ))}
    </select>
  </div>
)

export default Select
