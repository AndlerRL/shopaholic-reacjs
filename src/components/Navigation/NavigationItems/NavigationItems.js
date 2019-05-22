import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import css from './NavigationItems.css';

const navigationItems = props => (
  <ul className={[css.NavigationItems, props.show].join(' ')}>
    <NavigationItem
      exact
      link="/products"
      clicked={props.clicked}>
      PRODUCTS
    </NavigationItem>
    <NavigationItem
      exact
      link="/categories"
      clicked={props.clicked}>
      CATEGORIES
    </NavigationItem>
    <NavigationItem
      exact
      link="/departments"
      clicked={props.clicked}>
      DEPARTMENTS
    </NavigationItem>
  </ul>
);

export default navigationItems;