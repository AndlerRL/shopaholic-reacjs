import { connect } from 'react-redux';
import React from 'react';

import IconM from '../../UI/Icons/IconM';

import css from './Filter.css';

const filter = props => {
  const filters = props.filter.map(filter => {
    switch (filter.name) {
      case "French":
        return (
          <li>
            <IconM icon="clear" 
            clicked={props.clear} />
            Category: { filter.name }
          </li>
        )
      case "Italian":
          return (
            <li>
              <IconM icon="clear" 
              clicked={props.clear} />
              Category: { filter.name }
            </li>
          )
      case "Irish":
          return (
            <li>
              <IconM icon="clear" 
              clicked={props.clear} />
              Category: { filter.name }
            </li>
          )
      case "Animal":
          return (
            <li>
              <IconM icon="clear" 
              clicked={props.clear} />
              Category: { filter.name }
            </li>
          )
      case "Flower":
          return (
            <li>
              <IconM icon="clear" 
              clicked={props.clear} />
              Category: { filter.name }
            </li>
          )
      case "Christmas":
          return (
            <li>
              <IconM icon="clear" 
              clicked={props.clear} />
              Category: { filter.name }
            </li>
          )
      case "Valentine's":
          return (
            <li>
              <IconM icon="clear" 
              clicked={props.clear} />
              Category: { filter.name }
            </li>
          )
      default: 
        return null
    }
  });

  return (
    <div className={css.Filter}>
      <div className={css.FilterHead}>
        <h5>Filter {props.count} items</h5>
        <ul>
          { filters }
        </ul>
      </div>
    </div>
  )
};

export default filter;