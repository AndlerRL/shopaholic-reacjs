import { connect } from 'react-redux';
import React from 'react';

import * as actions from '../../../store/actions';
import { FilterDep, FilterCat } from './FilterConditionals';
import IconM from '../../UI/Icons/IconM';
import { Checkbox, FormControl, FormGroup, FormControlLabel, FormLabel } from '@material-ui/core';

import css from './Filter.css';

const Filter = props => {
  const changeDepHandler = department => e => {
    props.onFetchDepartmentId(
      props.filterDep.find(id => id.name === e.target.value).department_id,
      props.filterDep.find(id => id.name === e.target.value)
    )
  }

  const changeCatHandler = category => e => {
    props.onFetchCategoryId(
      props.filterCat.find(id => id.name === e.target.value).category_id,
      props.filterCat.find(id => id.name === e.target.value)
    )
  }
  

  return (
    <div className={css.Filter}>
      <div className={css.FilterHead}>
        <h5>Filter {props.count} items</h5>
        <ul>
          { props.hasValueCat.Animal || props.hasValueCat.Christmas || props.hasValueCat.Flower || props.hasValueCat.French ||
            props.hasValueCat.Irish || props.hasValueCat.Italian || props.hasValueCat["Valentine's"] ?
            <li>
              <IconM icon="clear" 
                clicked={props.clear} />
              <FilterCat categories={props.hasValueCat} />
            </li> : null }
          
          { props.hasValueDep.Regional || props.hasValueDep.Nature || props.hasValueDep.Seasonal ? 
            <li>
              <IconM icon="clear" 
                clicked={props.clear} />
              <FilterDep departments={props.hasValueDep} />
            </li> : null }
        </ul>
      </div>
      <div className={css.FilterBody}>
        <FormControl component="fieldset" className={css.FilterControl}>
          <FormLabel component="header"><h6>Filter By:</h6></FormLabel>
          <FormGroup>
            <FormLabel component="h5">Department</FormLabel>
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueDep.Regional} 
                  onChange={changeDepHandler("Regional")}
                  value="Regional" />
              }
              label="Regional" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueDep.Nature}
                  onChange={changeDepHandler("Nature")}
                  value="Nature" />
              }
              label="Nature" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueDep.Seasonal}
                  onChange={changeDepHandler("Seasonal")}
                  value="Seasonal" />
              }
              label="Seasonal" />
          </FormGroup>

          <FormGroup>
            <FormLabel component="h5">Category</FormLabel>
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueCat.Animal} 
                  onChange={changeCatHandler("Animal")}
                  value="Animal" />
              }
              label="Animal" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueCat.Christmas}
                  onChange={changeCatHandler("Christmas")}
                  value="Christmas" />
              }
              label="Christmas" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueCat.Flower}
                  onChange={changeCatHandler("Flower")}
                  value="Flower" />
              }
              label="Flower" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueCat.French}
                  onChange={changeCatHandler("French")}
                  value="French" />
              }
              label="French" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueCat.Italian} 
                  onChange={changeCatHandler("Italian")}
                  value="Italian" />
              }
              label="Italian" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueCat.Irish}
                  onChange={changeCatHandler("Irish")}
                  value="Irish" />
              }
              label="Irish" />
          <FormControlLabel 
            control={
              <Checkbox 
                checked={props.hasValueCat["Valentine's"]}
                onChange={changeCatHandler("Valentine's")}
                value="Valentine's" />
            }
            label="Valentine's" />
          </FormGroup>
        </FormControl>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    department: state.departments.department,
    departmentId: state.departments.departmentId,
    hasValueDep: state.departments.hasValue,
    hasValueCat: state.categories.hasValue,
    category: state.categories.category,
    categoryId: state.categories.categoryId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchDepartmentId: (departmentId, department) => dispatch(actions.fetchDepartmentsId(departmentId, department)),
    onFetchCategoryId: (categoryId, categories) => dispatch(actions.fetchCategoryId(categoryId, categories))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);