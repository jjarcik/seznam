import { ActionCreator } from 'redux'
import { FilterSetAction, FilterValueSetter } from './types'

// Type these action creators with `: ActionCreator<ActionTypeYouWantToPass>`.
// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly.

export const setFilterValue: ActionCreator<FilterSetAction> = (payload: FilterValueSetter) => ({
  type: '@@filter/FILTER_SET_VALUE',
  payload,
})
