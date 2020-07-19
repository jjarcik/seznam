import React from 'react'
import { useSelector } from 'react-redux'
import Input from '../../elements/Input'
import { filterValueSelector } from '../../../store/reducers/filter/selectors'
import { FilterInputProps } from './types'

const FilterName: React.FC<FilterInputProps> = ({ onChange }: FilterInputProps) => {
  const value = useSelector(filterValueSelector('name'))
  return <Input name="name" type="text" label="Název" onChange={onChange} value={value} />
}

export default FilterName
