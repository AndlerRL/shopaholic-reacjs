import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import css from './NavigationItems.css';

const navigationItems = props => (
  <ul className={css.NavigationItems}>
    <NavigationItem
      exact
      link="/women"
      clicked={props.clicked}>
      Women
    </NavigationItem>
    <NavigationItem
      exact
      link="/men"
      clicked={props.clicked}>
      Men
    </NavigationItem>
    <NavigationItem
      exact
      link="/shoes"
      clicked={props.clicked}>
      Shoes
    </NavigationItem>
    <NavigationItem
      exact
      link="/kids"
      clicked={props.clicked}>
      Kids
    </NavigationItem>
    <NavigationItem
      exact
      link="/brands"
      clicked={props.clicked}>
      Brands
    </NavigationItem>
    
  </ul>
);

export default navigationItems;