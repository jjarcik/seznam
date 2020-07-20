import { connect } from 'react-redux'
import ProductList from './ProductList'
import { ApplicationState } from '../../../store/'
import { productListSelector } from '../../../store/reducers/products/selectors'

const mapStateToProps = (state: ApplicationState) => ({
  items: productListSelector(state),
})

export default connect(mapStateToProps)(ProductList)
