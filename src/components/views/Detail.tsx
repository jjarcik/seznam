import React from 'react'
import { useParams } from 'react-router-dom'
import DetailLayout from '../layouts/Detail'
import ProductDetail from '../blocks/ProductDetail'
import { useInitProduct } from '../../hooks/useInitProducts'

const Detail: React.FC = () => {
  // use effect with fetch detail from API and set it to redux store
  const { id } = useParams()
  useInitProduct(id)

  return (
    <DetailLayout>
      <ProductDetail id={id} />
    </DetailLayout>
  )
}

export default Detail
