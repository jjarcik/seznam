import React from 'react'
import { useSelector } from 'react-redux'
import Select from '../../elements/Select'
import { filterValueSelector } from '../../../store/reducers/filter/selectors'
import { FilterInputProps } from './types'

const options = {
  os: [
    { value: 'Android', label: 'Android' },
    { value: 'iOS', label: 'iOS' },
    { value: 'Nokia OS', label: 'Nokia OS' },
  ],
}

const FilterOS: React.FC<FilterInputProps> = ({ onChange }: FilterInputProps) => {
  const value = useSelector(filterValueSelector('os'))
  return <Select name="os" label="Operační systém" options={options.os} onChange={onChange} value={value} />
}

export default FilterOS
