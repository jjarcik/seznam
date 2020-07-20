import React from 'react'
import { useSelector } from 'react-redux'
import Select from '../../elements/Select'
import { filterValueSelector } from '../../../store/reducers/filter/selectors'
import { FilterInputProps } from './types'

const options = {
  touchscreen: [
    { value: 'Ano', label: 'Ano' },
    { value: 'Ne', label: 'Ne' },
  ],
}

const FilterToucheScreen: React.FC<FilterInputProps> = ({ onChange }: FilterInputProps) => {
  const value = useSelector(filterValueSelector('touchscreen'))
  return <Select name="touchscreen" label="Dotykový display" options={options.touchscreen} onChange={onChange} value={value} />
}

export default FilterToucheScreen
