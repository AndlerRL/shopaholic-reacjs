import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

Enzyme.configure({
  adapter: new Adapter()
});

describe('<NavigationItems />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = Enzyme.shallow(<NavigationItems />);
  });

  it('should render 2 <NavigationItem /> elements if is not authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  })

  it('should render 3 <NavigationItem /> elements if is authenticated', () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
})