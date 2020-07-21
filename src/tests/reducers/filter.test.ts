import reducer from '../../store/reducers/filter/reducer'

const action = {
  type: '@@filter/FILTER_SET_VALUE',
  payload: {
    key: 'name',
    value: 'iPhone',
  },
}

const initialState = {
  name: null,
  cores: null,
  touchscreen: null,
  os: null,
}

test('set filter value to redux store', () => {
  const newState = reducer(initialState, action)
  expect(newState.name).toBe('iPhone')
})
