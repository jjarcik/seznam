import { createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, Reducer } from 'redux'
import { ProductsState } from './reducers/products/types'
import { FilterState } from './reducers/filter/types'
import productsReducer from './reducers/products/reducer'
import filterReducer from './reducers/filter/reducer'
import { ProductsActions } from './reducers/products/types'

export interface ApplicationState {
  products: ProductsState
  filter: FilterState
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  products: productsReducer,
  filter: filterReducer,
})

export const initialState = {
  products: {
    items: [],
  },
  filter: {},
}

export default function configureStore(): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({})
  return createStore<ApplicationState, ProductsActions, any, any>(reducers, initialState, composeEnhancers())
}
