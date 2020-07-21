import { filterValuesSelector, filterValueSelector } from '../../store/reducers/filter/selectors'

const state = {
  products: {
    items: [],
  },
  filter: {
    name: 'abc',
    touchscreen: 'yes',
  },
}

test('selectors of all filters return all filters from state', () => {
  expect(filterValuesSelector(state)).toBe(state.filter)
})

test('selectors of one filter return the one filter from state', () => {
  expect(filterValueSelector('name')(state)).toBe(state.filter.name)
})
