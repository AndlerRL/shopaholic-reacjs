import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NavLink } from 'react-router-dom';

Enzyme.configure({
  adapter: new Adapter()
});

describe('<NavigationItems />', () => {
  let wrapper;

  it('should an exact Logout Btn element if authenticated', () => {
    wrapper = Enzyme.shallow(<NavLink exact to="/logout" isAuth />);
    wrapper.setProps({
      isAuth: true,
      exact: true
    })
    expect(wrapper.contains(<NavLink exact to="/logout" isAuth>
      Logout
    </NavLink>));
  });
})