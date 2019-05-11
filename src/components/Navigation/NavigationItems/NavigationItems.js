import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import css from './NavigationItems.css';

const navigationItems = props => (
  <ul className={css.NavigationItems}>
    <NavigationItem
      exact
      link="/women"
      clicked={props.clicked}>
      <h4>Women</h4>
    </NavigationItem>
    <NavigationItem
      exact
      link="/men"
      clicked={props.clicked}>
      <h4>Men</h4>
    </NavigationItem>
    <NavigationItem
      exact
      link="/shoes"
      clicked={props.clicked}>
      <h4>Shoes</h4>
    </NavigationItem>
    <NavigationItem
      exact
      link="/kids"
      clicked={props.clicked}>
      <h4>Kids</h4>
    </NavigationItem>
    <NavigationItem
      exact
      link="/brands"
      clicked={props.clicked}>
      <h4>Brands</h4>
    </NavigationItem>
    
  </ul>
);

export default navigationItems;