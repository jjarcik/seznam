import React from 'react'
import Filters from '../forms/Filters'
import ProductList from '../blocks/ProductList'
import HomeLayout from '../layouts/Home'
import { useInitProductsList } from '../../hooks/useInitProducts'

const Home: React.FC = () => {
  // use effect with fetch list from API and set it to redux store
  useInitProductsList()
  return (
    <HomeLayout>
      <Filters />
      <ProductList />
    </HomeLayout>
  )
}

export default Home
