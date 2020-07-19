import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initProductList } from '../store/reducers/products/actions'

/**
 * Fetch product from API and set it to Redux
 */
const useInitProductsList = (): void => {
  // dispatch of redux
  const dispatch = useDispatch()
  // do it only once
  useEffect(() => {
    // fetch data and set it to store - Mockup API
    dispatch(initProductList(list))
  }, [dispatch])
}

// fake list of products
const list = [
  { id: 1, name: 'Samsung' },
  { id: 2, name: 'Nokie' },
  { id: 3, name: 'Motorola' },
  { id: 4, name: 'Apple' },
]

export default useInitProductsList
