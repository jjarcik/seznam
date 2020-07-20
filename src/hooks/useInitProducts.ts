import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initProductList, initProduct } from '../store/reducers/products/actions'
import api from '../api.json'

/**
 * Fetch product list from API and set it to Redux
 */
export const useInitProductsList = (): void => {
  // dispatch of redux
  const dispatch = useDispatch()
  // do it once
  useEffect(() => {
    // get data - like a fake API
    const productList = initProductList(api.products)
    dispatch(productList)
  }, [dispatch])
}

/**
 * Fetch product from API and set it to Redux
 */
export const useInitProduct = (id: number | string): void => {
  // dispatch of redux
  const dispatch = useDispatch()
  // do it once
  useEffect(() => {
    // get data - like a fake API
    const product = api.products.find((product) => product.id === Number(id))
    // if product exists
    if (product) {
      dispatch(initProduct(product))
    } else {
      throw new Error(`Product with id ${id} not found`)
    }
  }, [id, dispatch])
}
