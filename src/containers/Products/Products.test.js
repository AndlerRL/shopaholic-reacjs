import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';

import Items from './Products';
import Products from '../../components/Products/Products';

Enzyme.configure({
  adapter: new Adapter()
});

describe('<Products />', () => {
  let wrapper;
  it('should render <Products /> when receiving all data', () => {
    wrapper = Enzyme.render(<Items/>)
    
    expect(wrapper.contains(
      <Products 
        onGetProducts
        onNextPage
        onPrevPage
        onDepNextPage
        onDepPrevPage
        onCatNextPage
        onCatPrevPage
        onGetAttributes
        onAttributesValues
        onFetchCategories
        onFetchDepartments
        onFetchProductData
        onFetchProductsInDepartment
        onFetchProductsInCategory
        onGenerateCartId
        clearFilter
        onAddProduct /> ));
  });
})