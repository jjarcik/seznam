import { Reducer } from 'redux'
import { FilterState, FilterActions } from './types'

export const initialState: FilterState = {
  name: null,
  cores: null,
  touchscreen: null,
  os: null,
}

const reducer: Reducer<FilterState> = (state: FilterState = initialState, action) => {
  switch ((action as FilterActions).type) {
    case '@@filter/FILTER_SET_VALUE':
      return { ...state, [action.payload.key]: action.payload.value }
    default:
      return state
  }
}

export default reducer
