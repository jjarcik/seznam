import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../elements/Button'
import Aside from '../../elements/Aside'
import HeaderFilter from '../../blocks/HeaderFilter'
import { H6 } from '../../elements/Heading'
import Box from '../../elements/Box'
import FilterName from './FilterName'
import FilterCores from './FilterCores'
import FilterToucheScreen from './FilterToucheScreen'
import FilterOS from './FilterOS'
import { setFilterValue } from '../../../store/reducers/filter/actions'

const Filters: React.FC = () => {
  const dispatch = useDispatch()
  const [isOpen, open] = useState(false)

  // from input to redux
  const onChange = useCallback(
    (event) => {
      const payload = { key: event.target.name, value: event.target.value }
      const action = setFilterValue(payload)
      dispatch(action)
    },
    [dispatch],
  )

  // toggle filters on mobile
  const toggleFilters = useCallback(() => open(!isOpen), [isOpen])

  return (
    <section>
      <Aside isOpen={isOpen}>
        <Box lgVisible={false}>
          <HeaderFilter>
            <H6>Filtry a řazení</H6>
            <Button text="Hotovo" onClick={toggleFilters} fluid={false} />
          </HeaderFilter>
        </Box>
        <FilterName onChange={onChange} />
        <FilterCores onChange={onChange} />
        <FilterToucheScreen onChange={onChange} />
        <FilterOS onChange={onChange} />
      </Aside>
      <Box lgVisible={false}>
        <Button text="Filtry a řazení" onClick={toggleFilters} />
      </Box>
    </section>
  )
}

export default Filters
