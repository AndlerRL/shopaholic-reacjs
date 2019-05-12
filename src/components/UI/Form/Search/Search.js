import React from 'react';

import Input from '../Input/Input';

import css from './Search.css';

const search = props => (
  <Input 
    type="submit"
    placeholder="search anything"
    cssName={css.Search}
    iconSearch="search"
    clicked={props.clicked} />
);

export default search;