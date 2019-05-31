import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import css from './NavigationItems.css';

const navigationItems = props => (
  <ul className={[css.NavigationItems, props.show].join(' ')}>
    <NavigationItem
      exact
      link="/"
      clicked={props.clicked}>
      HOME
    </NavigationItem>
    <NavigationItem
      exact
      link="/products"
      clicked={props.clicked}>
      PRODUCTS
    </NavigationItem>
  </ul>
);

export default navigationItems;