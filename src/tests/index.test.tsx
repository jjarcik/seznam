import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import App from '../components/blocks/App'
import Main from '../components/layouts/Main'
import Filters from '../components/forms/Filters'
import FilterName from '../components/forms/Filters/FilterName'
import ProductListItem from '../components/blocks/ProductListItem'

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('renders <Main /> components', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Main)).to.have.lengthOf(1)
  })

  it('renders <Filters /> components', () => {
    const wrapper = mount(<App />)
    const filters = wrapper.find(Filters)
    expect(filters).to.have.lengthOf(1)
  })

  it('renders 10x <ProductListItems />', () => {
    const wrapper = mount(<App />)
    const productListItems = wrapper.find(ProductListItem)
    expect(productListItems).to.have.lengthOf(10)
  })

  it('renders 3x <ProductListItems /> when filter of name is used', () => {
    const wrapper = mount(<App />)
    wrapper
      .find(FilterName)
      .find('input')
      .simulate('change', { target: { name: 'name', value: 'x' } })

    const productListItems = wrapper.find(ProductListItem)
    expect(productListItems).to.have.lengthOf(3)
  })
})
