import { connect } from 'react-redux';
import React from 'react';

import * as actions from '../../store/actions';
import { FilterDep, FilterCat } from './FilterConditionals';
import IconM from '../UI/Icons/IconM';
import Slider from '../UI/Slider/Slider';
import { Checkbox, FormControl, FormGroup, FormControlLabel, FormLabel } from '@material-ui/core';

import css from './Filter.css';

const Filter = props => {
  const changeDepHandler = department => e => {
    const id = props.filterDep.find(id => id.name === department).department_id;
    
    props.onFetchDepartmentId(id);
    props.filterDepartment(1, id)
  }

  const changeCatHandler = category => e => {
    const id = props.filterCat.find(id => id.name === category).category_id;

    props.onFetchCategoryId(id);
    props.filterCategory(1, id);
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

  return (
    <div className={css.Filter}>
      <div className={css.FilterHead}>
        <h5>Filter {props.count} items</h5>
        <ul>
          { props.hasValueCat.Animal || props.hasValueCat.Christmas || props.hasValueCat.Flower || props.hasValueCat.French ||
            props.hasValueCat.Irish || props.hasValueCat.Italian || props.hasValueCat["Valentine's"] ?
            props.isCategory ?
            <li>
              <IconM icon="clear" 
                clicked={props.clear} />
              <FilterCat categories={props.hasValueCat} />
            </li> : null : null }
          
          { props.hasValueDep.Regional || props.hasValueDep.Nature || props.hasValueDep.Seasonal ?
            props.isDepartment ?
            <li>
              <IconM icon="clear" 
                clicked={props.clear} />
              <FilterDep departments={props.hasValueDep} />
            </li> : null : null }
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
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueDep.Regional && props.isDepartment}
                  onChange={changeDepHandler("Regional")}
                  onClick={props.filterDepartment("Regional")}
                  value="Regional"
                  disabled={
                    props.hasValueDep.Nature ||
                    props.hasValueDep.Seasonal
                  } />
              }
              label="Regional" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueDep.Nature && props.isDepartment}
                  onChange={changeDepHandler("Nature")}
                  onClick={props.filterDepartment("Nature")}
                  value="Nature"
                  disabled={
                    props.hasValueDep.Regional ||
                    props.hasValueDep.Seasonal
                  } />
              }
              label="Nature" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueDep.Seasonal && props.isDepartment}
                  onChange={changeDepHandler("Seasonal")}
                  onClick={props.filterDepartment("Seasonal")}
                  value="Seasonal"
                  disabled={
                    props.hasValueDep.Nature ||
                    props.hasValueDep.Regional
                  } />
              }
              label="Seasonal" />
          </FormGroup>

          <FormGroup>
            <FormLabel component="h5">Category</FormLabel>
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueCat.Animal && props.isCategory} 
                  onChange={changeCatHandler("Animal")}
                  onClick={props.filterCategory("Animal")}
                  value="Animal"
                  disabled={
                    props.hasValueCat.Christmas ||
                    props.hasValueCat.Flower ||
                    props.hasValueCat.French ||
                    props.hasValueCat.Italian ||
                    props.hasValueCat.Irish ||
                    props.hasValueCat["Valentine's"]
                  } />
              }
              label="Animal" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueCat.Christmas && props.isCategory}
                  onChange={changeCatHandler("Christmas")}
                  onClick={props.filterCategory("Christmas")}
                  value="Christmas"
                  disabled={
                    props.hasValueCat.Animal ||
                    props.hasValueCat.Flower ||
                    props.hasValueCat.French ||
                    props.hasValueCat.Italian ||
                    props.hasValueCat.Irish ||
                    props.hasValueCat["Valentine's"]
                  } />
              }
              label="Christmas" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueCat.Flower && props.isCategory}
                  onChange={changeCatHandler("Flower")}
                  onClick={props.filterCategory("Flower")}
                  value="Flower"
                  disabled={
                    props.hasValueCat.Christmas ||
                    props.hasValueCat.Animal ||
                    props.hasValueCat.French ||
                    props.hasValueCat.Italian ||
                    props.hasValueCat.Irish ||
                    props.hasValueCat["Valentine's"]
                  } />
              }
              label="Flower" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueCat.French && props.isCategory}
                  onChange={changeCatHandler("French")}
                  onClick={props.filterCategory("French")}
                  value="French"
                  disabled={
                    props.hasValueCat.Christmas ||
                    props.hasValueCat.Flower ||
                    props.hasValueCat.Animal ||
                    props.hasValueCat.Italian ||
                    props.hasValueCat.Irish ||
                    props.hasValueCat["Valentine's"]
                  } />
              }
              label="French" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueCat.Italian && props.isCategory} 
                  onChange={changeCatHandler("Italian")}
                  onClick={props.filterCategory("Italian")}
                  value="Italian"
                  disabled={
                    props.hasValueCat.Christmas ||
                    props.hasValueCat.Flower ||
                    props.hasValueCat.French ||
                    props.hasValueCat.Animal ||
                    props.hasValueCat.Irish ||
                    props.hasValueCat["Valentine's"]
                  } />
              }
              label="Italian" />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={props.hasValueCat.Irish && props.isCategory}
                  onChange={changeCatHandler("Irish")}
                  onClick={props.filterCategory("Irish")}
                  value="Irish"
                  disabled={
                    props.hasValueCat.Christmas ||
                    props.hasValueCat.Flower ||
                    props.hasValueCat.French ||
                    props.hasValueCat.Italian ||
                    props.hasValueCat.Animal ||
                    props.hasValueCat["Valentine's"]
                  } />
              }
              label="Irish" />
          <FormControlLabel 
            control={
              <Checkbox 
                checked={props.hasValueCat["Valentine's"] && props.isCategory}
                onChange={changeCatHandler("Valentine's")}
                onClick={props.filterCategory("Valentine's")}
                value="Valentine's"
                disabled={
                  props.hasValueCat.Christmas ||
                  props.hasValueCat.Flower ||
                  props.hasValueCat.French ||
                  props.hasValueCat.Italian ||
                  props.hasValueCat.Irish ||
                  props.hasValueCat.Animal
                } />
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
    hasValueDep: state.departments.hasValue,
    hasValueCat: state.categories.hasValue,
    isDepartment: state.products.department,
    isCategory: state.products.category,
    category: state.categories.category,
    queryStr: state.products.meta.query_string
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchDepartmentId: departmentId => dispatch(actions.fetchDepartmentsId(departmentId)),
    onFetchCategoryId: categoryId => dispatch(actions.fetchCategoryId(categoryId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);