import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import * as actions from '../../store/actions';
import { FilterDep, FilterCat } from './FilterConditionals';
import IconM from '../UI/Icons/IconM';
import Slider from '../UI/Slider/Slider';
import { Checkbox, FormControl, FormGroup, FormControlLabel, FormLabel } from '@material-ui/core';

import css from './Filter.css';

const Filter = props => {
  useEffect(() => {
    props.onFetchCategories();
    props.onFetchDepartments();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeDepHandler = department => e => {
    const id = props.departments.find(id => id.name === department).department_id;
  
    props.onFetchDepartmentId(id);
    props.onCatInDepartment(id);  
  }

  const changeCatHandler = category => e => {
    const id = props.categories.find(id => id.name === category).category_id;
    
    props.onFetchCategoryId(id);
  }

  const filterCategoryHandler = name => e => {
    const id = props.categories.find(id => id.name === name).category_id;

    props.onFetchProductsInCategory(props.page, id);
  }

  const filterDepartmentHandler = name => e => {
    const id = props.departments.find(id => id.name === name).department_id;

    props.onFetchProductsInDepartment(props.page, id);
  }

  const attributesColor = props.colorsAttr.map(attr => (
    <button 
      key={attr.attribute_value_id}
      className={props.colorAttribute[attr.value] ? css.Selected : css.ColorItem}
      onClick={props.colorSelect(attr.value, attr.attribute_value_id)}
      name={attr.attribute_value}>
      <div style={{ backgroundColor: attr.value}}></div>
    </button>
  ))

  const attributesSize = props.sizesAttr.map(attr => (
    <button 
      key={attr.attribute_value_id}
      className={props.sizeAttribute[attr.value] ? css.Selected : css.SizeItem}
      onClick={props.sizeSelect(attr.value ,attr.attribute_value_id)}
      name={attr.value}>
      <span>{ attr.value }</span>
    </button>
  ))

  let categoriesNames = null;

  if (props.catInDept)
   categoriesNames = props.catInDept.map(catInDept => catInDept.name);

  const departments = props.departments.map(department => (
    <FormControlLabel 
      control={
        <Checkbox 
          checked={props.hasValueDep[department.name] && props.isDepartment}
          onChange={changeDepHandler(department.name)}
          onClick={filterDepartmentHandler(department.name)}
          value={department.name}
          disabled={ !props.hasValueDep[department.name] && props.isDepartment } />
      }
      label={department.name}
      key={department.department_id} />
  ));

  const categories = props.categories.map(category => (
    <FormControlLabel
      control={
        <Checkbox
          checked={props.hasValueCat[category.name] && props.isCategory} 
          onChange={changeCatHandler(category.name)}
          onClick={filterCategoryHandler(category.name)}
          value={category.name}
          disabled={ (!props.hasValueCat[category.name] && props.isCategory) ||
            (!categoriesNames.find(name => name === category.name) && props.isDepartment) } />
      }
      label={category.name}
      key={category.category_id} />
  ));

  return (
    <div className={css.Filter}>
      <div className={css.FilterHead}>
        <h5>Filter {props.count} items</h5>
        <ul>
          { (props.hasValueCat.Animal || props.hasValueCat.Christmas || props.hasValueCat.Flower || props.hasValueCat.French ||
            props.hasValueCat.Irish || props.hasValueCat.Italian || props.hasValueCat["Valentine's"]) && props.isCategory ?
            <li>
              <IconM icon="clear" 
                clicked={props.clear} />
              <FilterCat categories={props.hasValueCat} />
            </li> : null }
          
          { (props.hasValueDep.Regional || props.hasValueDep.Nature || props.hasValueDep.Seasonal) && props.isDepartment ?
            <li>
              <IconM icon="clear" 
                clicked={props.clear} />
              <FilterDep departments={props.hasValueDep} />
            </li> : null }
          { props.queryStr ?
            <li>
              <IconM icon="clear" 
                clicked={props.clear} />
              <span>Search: { props.queryStr }</span>
            </li> : null }
        </ul>
      </div>
      <div className={css.FilterBody}>
        <div className={css.Attributes}>
          <span>Colors</span>
          <div className={css.Colors}>
            { attributesColor }
          </div>
          <span>Sizes</span>
          <div className={css.Sizes}>
            { attributesSize }
          </div> 
        </div>
        <Slider 
          sliderValue={props.sliderValue}
          changed={props.sliderChanged}
          labelId="price_range"
          label="Price Range" />
        <FormControl component="fieldset" className={css.FilterControl}>
          <FormLabel component="header"><h6>Filter By:</h6></FormLabel>
          <FormGroup>
            <FormLabel component="h5">Department</FormLabel>
            { departments }
          </FormGroup>

          <FormGroup>
            <FormLabel component="h5">Category</FormLabel>
            { categories }
          </FormGroup>
        </FormControl>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    departments: state.departments.departments,
    department: state.departments.department,
    hasValueDep: state.departments.hasValue,
    hasValueCat: state.categories.hasValue,
    isDepartment: state.departments.department.length !== 0,
    isCategory: state.categories.category.length !== 0,
    category: state.categories.category,
    catInDept: state.categories.catInDept,
    queryStr: state.products.meta.query_string,
    page: state.products.meta.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetProducts: page => dispatch(actions.fetchProducts(page)),
    onFetchCategories: () => dispatch(actions.fetchCategories()),
    onFetchDepartments: () => dispatch(actions.fetchDepartments()),
    onFetchDepartmentId: departmentId => dispatch(actions.fetchDepartmentsId(departmentId)),
    onFetchCategoryId: categoryId => dispatch(actions.fetchCategoryId(categoryId)),
    onCatInDepartment: departmentId => dispatch(actions.fetchCategoriesInDepartment(departmentId)),
    onFetchProductsInDepartment: (page, departmentId) => dispatch(actions.fetchProductsInDepartment(page, departmentId)),
    onFetchProductsInCategory: (page, departmentId) => dispatch(actions.fetchProductsInCategory(page, departmentId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);