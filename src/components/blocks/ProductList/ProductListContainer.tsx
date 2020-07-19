import { connect } from 'react-redux'
import ProductList from './ProductList'
import { ApplicationState } from '../../../store/'

const mapStateToProps = ({ products }: ApplicationState) => ({
  items: products.items,
})

export default connect(mapStateToProps)(ProductList)
