import React from 'react'
import Filters from '../forms/Filters'
import ProductList from '../blocks/ProductList'
import useInitProductsList from '../../hooks/useInitProductsList'

const Home: React.FC = () => {
  // use effect with fetch list from API and set it to redux store
  useInitProductsList()
  return (
    <>
      <Filters />
      <ProductList />
    </>
  )
}

export default Home
