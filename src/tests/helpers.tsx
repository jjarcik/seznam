import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, RenderResult } from '@testing-library/react'
import { reducers, initialState } from '../store'

interface WrapperType {
  children: React.ReactNode
}

export function renderWithRedux(ui: React.ReactElement, initialReduxState = initialState): RenderResult {
  const store = createStore(reducers, initialReduxState)

  function Wrapper({ children }: WrapperType): React.ReactElement {
    return <Provider store={store}>{children}</Provider>
  }

  return render(ui, { wrapper: Wrapper as React.FC })
}
