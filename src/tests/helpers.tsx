import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { reducers, initialState } from '../store'

export function renderWithRedux(
  ui,
  { initialReduxState = initialState, store = createStore(reducers, initialReduxState), ...renderOptions } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}
