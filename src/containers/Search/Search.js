import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';

import { checkValidity, updateObject } from '../../share/utility';
import * as actions from '../../store/actions';
import Axios from '../../axios-shop';
import Search from '../../components/Search/Search';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const SearchQuery = props => {
  const [search, setSearch] = useState({
    search: {
      elementType: 'text',
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

  const searchHandler = e => {
    e.preventDefault();

    const searchQuery = {};

    for (let query in search)
      searchQuery[query] = search[query].value;

    const query = searchQuery.search;

    props.onSearchProduct(1, query);

    if (props.history.pathname !== '/products') {
      props.history.replace('/products');
      setTimeout(() => {
        props.onSearchProduct(1, query);
      }, 1000);
    }
  }

  return (
    <Search
      search={search}
      submit={searchHandler}
      changed={inputChangedHandler}
      disabled={searchIsValid} />
  )
};

const mapStateToProps = state => {
  return {
    isSearch: state.products.search,
    queryStr: state.products.meta.query_string
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchProduct: (page, queryStr) => dispatch(actions.productsSearch(page, queryStr)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(withRouter(withErrorHandler(SearchQuery, Axios))));