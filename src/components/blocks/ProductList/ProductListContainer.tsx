import { connect } from 'react-redux'
import ProductList from './ProductList'
import { ApplicationState } from '../../../store/'
import { productListSelectorFilterd } from '../../../store/reducers/products/selectors'

const mapStateToProps = (state: ApplicationState) => ({
  items: productListSelectorFilterd(state),
})

export default connect(mapStateToProps)(ProductList)
