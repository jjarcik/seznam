import { Action } from 'redux'

export type FilterValue = string | number | null

export type FilterValueSetter = {
  key: string
  value: FilterValue
}

export interface FilterState {
  name?: FilterValue
  cores?: FilterValue
  touchscreen?: FilterValue
  os?: FilterValue
}

export interface FilterSetAction extends Action {
  type: '@@filter/FILTER_SET_VALUE'
  payload: FilterValueSetter
}

export type FilterActions = FilterSetAction
