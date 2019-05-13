import React from 'react';

import Input from '../Input/Input';

import css from './Search.css';

const search = props => (
  <Input 
    type="submit"
    placeholder="search anything"
    cssName={[css.Search, props.show].join(' ')}
    iconSearch="search"
    clicked={props.clicked} />
);

export default search;