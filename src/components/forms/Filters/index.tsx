import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../elements/Button'
import FilterName from './FilterName'
import FilterCores from './FilterCores'
import FilterToucheScreen from './FilterToucheScreen'
import FilterOS from './FilterOS'
import { setFilterValue } from '../../../store/reducers/filter/actions'

const Filters: React.FC = () => {
  const dispatch = useDispatch()
  // set value from input to redux
  const onChange = useCallback(
    (event) => {
      dispatch(
        setFilterValue({
          key: event.target.name,
          value: event.target.value,
        }),
      )
    },
    [dispatch],
  )

  return (
    <>
      <aside>
        <FilterName onChange={onChange} />
        <FilterCores onChange={onChange} />
        <FilterToucheScreen onChange={onChange} />
        <FilterOS onChange={onChange} />
      </aside>
      <Button text="Filtry a řazení" />
    </>
  )
}

export default Filters
