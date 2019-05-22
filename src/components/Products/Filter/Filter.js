import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';

import * as actions from '../../../store/actions';
import { updateObject } from '../../../share/utility';
import { FilterDep, FilterCat } from './FilterConditionals';
import IconM from '../../UI/Icons/IconM';
import { Checkbox, FormControl, FormGroup, FormControlLabel, FormLabel } from '@material-ui/core';

import css from './Filter.css';

const Filter = props => {
  const [categories, setCategories] = useState({
    French: false,
    Italian: false,
    Irish: false,
    Animal: false,
    Flower: false,
    Christmas: false,
    Valentines: false
  });
  const [departments, setDepartments] = useState({
    Regional: false,
    Nature: false,
    Seasonal: false
  });
    
  useEffect(() => {
  }, []);

  const changeDepHandler = department => e => {
    setDepartments(updateObject(departments, {
      [department]: e.target.checked
    }));
    
    if (departments)
      props.onFetchDepartmentId(
        props.filterDep.find(id => id.name === e.target.value).department_id,
        props.filterDep.find(id => id.name === e.target.value)
      )
    /* else
      props.onFetchDepartmentId(
        null,
        props.filterDep.find(id => id.name === e.target.value).pop()
      ) */

    getUnique(props.department, 'department_id')
  }

  const changeCatHandler = category => e => {
    setCategories(updateObject(categories, {
      [category]: e.target.checked
    }))
  }

  const getUnique = (arr, comp) => {
    const unique = arr.map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e]).map(e => arr[e]);

    return unique;
  }

  console.log()

  return (
    <div className={css.Filter}>
      <div className={css.FilterHead}>
        <h5>Filter {props.count} items</h5>
        <ul>
          { categories.Animal || categories.Christmas || categories.Flower || categories.French ||
            categories.Irish || categories.Italian || categories.Valentines ?
            <li>
              <IconM icon="clear" 
                clicked={props.clear} />
              <FilterCat categories={categories} />
            </li> : null }
          
          { departments.Regional || departments.Nature || departments.Seasonal ? 
            <li>
              <IconM icon="clear" 
                clicked={props.clear} />
              <FilterDep departments={departments} />
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
                  checked={departments.Regional} 
                  onChange={changeDepHandler("Regional")}
                  value="Regional" />
              }
              label="Regional" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={departments.Nature}
                  onChange={changeDepHandler("Nature")}
                  value="Nature" />
              }
              label="Nature" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={departments.Seasonal}
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
                  checked={categories.Animal} 
                  onChange={changeCatHandler("Animal")}
                  value="Animal" />
              }
              label="Animal" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={categories.Christmas}
                  onChange={changeCatHandler("Christmas")}
                  value="Christmas" />
              }
              label="Christmas" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={categories.Flower}
                  onChange={changeCatHandler("Flower")}
                  value="Flower" />
              }
              label="Flower" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={categories.French}
                  onChange={changeCatHandler("French")}
                  value="French" />
              }
              label="French" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={categories.Italian} 
                  onChange={changeCatHandler("Italian")}
                  value="Italian" />
              }
              label="Italian" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={categories.Irish}
                  onChange={changeCatHandler("Irish")}
                  value="Irish" />
              }
              label="Irish" />
          <FormControlLabel 
            control={
              <Checkbox 
                checked={categories.Valentines}
                onChange={changeCatHandler("Valentines")}
                value="Valentines" />
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
    departmentId: state.departments.departmentId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchDepartmentId: departmentId => dispatch(actions.fetchDepartmentsId(departmentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);