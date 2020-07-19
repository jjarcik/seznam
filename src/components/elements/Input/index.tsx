import React from 'react'

interface InputProps {
  label: string
  type: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number | null | undefined
}

const Input: React.FC<InputProps> = ({ label, type, name, onChange, value }: InputProps) => (
  <div>
    <label>{label}</label>
    <input type={type} name={name} onChange={onChange} value={value || ''} />
  </div>
)

export default Input
