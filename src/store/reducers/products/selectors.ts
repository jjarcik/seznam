import get from 'lodash/get'
import omit from 'lodash/omit'
import { ApplicationState } from '../../index'
import { Product } from './types'
import { filterValuesSelector } from '../filter/selectors'
import { FilterState } from '../filter/types'

/**
 * all items of product list
 * @param state
 */
export const productListSelector = (state: ApplicationState): Product[] => {
  return state.products.items
}

/**
 * all items of product list filtered by state.filter
 * @param state
 */
export const productListSelectorFilterd = (state: ApplicationState): Product[] => {
  // get values of filters
  const filterValues = filterValuesSelector(state)
  // get function for filtering params
  const filterParams = productFilterParams(omit(filterValues, ['name']))
  // get function for filtering name
  const filterName = productFilterName(get(filterValues, 'name'))
  // filter products
  return state.products.items.filter(filterParams).filter(filterName)
}

/**
 * find product from list of products by id
 * @param state
 * @param id
 */
export const productDetailSelector = (state: ApplicationState, id: number | string): Product | undefined => {
  // all products
  const products = productListSelector(state)
  // one product
  const product = products.find((product) => product.id === Number(id))

  return product
}

/**
 * deciding whether the product params meets the conditions of the filter
 * @param filterValues
 * @return function for filtering one product
 * @return true if product meets the conditions, otherwise false
 */
export const productFilterParams = (filterValues: FilterState) => (product: Product): boolean => {
  for (const i in filterValues) {
    const filterValue = get(filterValues, i)
    const productValue = get(product, `params.${i}`)

    if (filterValue) {
      if (productValue !== filterValue) {
        return false
      }
    }
  }
  return true
}

/**
 * deciding whether the product name meets the conditions of the filter
 * @param name input for name from filter
 * @return function for filtering one prouct
 * @return true if product name meets the conditions, otherwise false
 */
export const productFilterName = (name: string | undefined | null | number) => (product: Product): boolean => {
  return !name || product.name.toLowerCase().includes(String(name).toLowerCase())
}
