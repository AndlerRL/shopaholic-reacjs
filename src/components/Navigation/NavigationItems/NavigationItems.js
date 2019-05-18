import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import css from './NavigationItems.css';

const navigationItems = props => (
  <ul className={[css.NavigationItems, props.show].join(' ')}>
    <NavigationItem
      exact
      link="/products"
      clicked={props.clicked}>
      Women
    </NavigationItem>
    <NavigationItem
      exact
      link="/products"
      clicked={props.clicked}>
      Men
    </NavigationItem>
    <NavigationItem
      exact
      link="/products"
      clicked={props.clicked}>
      Shoes
    </NavigationItem>
    <NavigationItem
      exact
      link="/products"
      clicked={props.clicked}>
      Kids
    </NavigationItem>
    <NavigationItem
      exact
      link="/products"
      clicked={props.clicked}>
      Brands
    </NavigationItem>
    
  </ul>
);

export default navigationItems;