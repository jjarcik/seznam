import get from 'lodash/get'
import { ApplicationState } from '../../index'
import { FilterState } from './types'

export const filterValuesSelector = (state: ApplicationState): FilterState => {
  return get(state, 'filter')
}

export const filterValueSelector = (name: string): ((state: ApplicationState) => string) => (state: ApplicationState): string => {
  return get(state, `filter.${name}`)
}
