import React, { useState } from 'react';

import { checkValidity, updateObject } from '../../../../share/utility';
import Input from '../Input/Input';

import css from './Search.css';

const Search = props => {
  const [search, setSearch] = useState({
    search: {
      elementType: 'submit',
      elementConfig: {
        type: 'text',
        placeholder: 'search anything'
      },
      value: '',
      validation: {
        required: false,
        valid: false,
        touched: false
      }
    }
  });
  const [searchIsValid, setSearchIsValid] = useState(false);

  const inputChangedHandler = (e, inputId) => {
    let searchIsValid = true;
    const updatedSearchEle = updateObject(search[inputId], {
      value: e.target.value,
      validation: {...search[inputId].validation,
        valid: checkValidity(e.target.value, search[inputId].validation),
        touched: true
      }
    })
    const updatedSearch = updateObject(search, {
      [inputId]: updatedSearchEle
    })

    for (let searchId in updatedSearch)
      searchIsValid = updatedSearch[searchId].validation.valid && searchIsValid;

    setSearch(updatedSearch);
    setSearchIsValid(searchIsValid);
  }

  const searchInput = [];

  for (let key in search) {
    searchInput.push({
      id: key,
      config: search[key]
    })
  }

  const searchComponent = searchInput.map(searchEle => (
    <Input 
      cssName={[css.Search, props.show].join(' ')}
      iconSearch="search"
      clicked={e => props.searchClicked(e, searchEle.config.value)}
      invalid={!searchEle.config.validation.valid}
      shouldValidate={searchEle.config.validation}
      touched={searchEle.config.validation.touched}
      key={searchEle.id}
      elementType={searchEle.config.elementType}
      elementConfig={searchEle.config.elementConfig}
      value={searchEle.config.value}
      for={searchEle.id}
      changed={e => inputChangedHandler(e, searchEle.id)} />
  ))
  
  return (
    searchComponent
  )
};

export default Search;