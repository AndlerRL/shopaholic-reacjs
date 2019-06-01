import React from 'react';

import Input from '../UI/Form/Input/Input';
import BtnIcon from '../UI/Btn/BtnIcon';

import css from './Search.css';

const Search = props => {
  const searchInput = [];

  for (let key in props.search) {
    searchInput.push({
      id: key,
      config: props.search[key]
    })
  }

  const searchComponent = searchInput.map(searchEle => (
    <Input
      invalid={!searchEle.config.validation.valid}
      shouldValidate={searchEle.config.validation}
      touched={searchEle.config.validation.touched}
      key={searchEle.id}
      elementType={searchEle.config.elementType}
      elementConfig={searchEle.config.elementConfig}
      value={searchEle.config.value}
      for={searchEle.id}
      changed={e => props.changed(e, searchEle.id)} />
  ))
  
  return (
    <form 
      className={css.Search}
      onSubmit={props.submit}>
      <BtnIcon
        icon="search"
        iconType="fas"
        iconColor="#f5f5f5"
        btnType="contained"
        disabled={!props.disabled}
        clicked={props.submit} />
      { searchComponent }
    </form>
  )
};

export default Search;