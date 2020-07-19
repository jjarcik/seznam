import React from 'react'
import { useSelector } from 'react-redux'
import Select from '../../elements/Select'
import { filterValueSelector } from '../../../store/reducers/filter/selectors'
import { FilterInputProps } from './types'

const options = {
  cores: new Array(10).fill('').map((v, k) => ({ value: k + 1, label: k + 1 })),
}

const FilterCores: React.FC<FilterInputProps> = ({ onChange }: FilterInputProps) => {
  const value = useSelector(filterValueSelector('cores'))
  return <Select name="cores" label="Počet jader procesoru" options={options.cores} onChange={onChange} value={value} />
}

export default FilterCores
