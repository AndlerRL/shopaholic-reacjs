import React from 'react';

export const FilterDep = props => {
  let filter = [];

  if (props.departments.Regional) {
    filter.push('Regional')
  }
  
  if (props.departments.Nature) {
    filter.push('Nature')
  }
  
  if (props.departments.Seasonal) {
    filter.push('Seasonal')
  }

  return (
    <span>Department: { filter.join(', ') } </span>
  )
};

export const FilterCat = props => {
  const filter = [];

  if (props.categories.French) {
    filter.push('French')
  }
  
  if (props.categories.Italian) {
    filter.push('Italian')
  }
  
  if (props.categories.Irish) {
    filter.push('Irish')
  }
  
  if (props.categories.Animal) {
    filter.push('Animal')
  }
  
  if (props.categories.Flower) {
    filter.push('Flower')
  }
  
  if (props.categories.Christmas) {
    filter.push('Christmas')
  }
  
  if (props.categories.Valentines) {
    filter.push("Valentine's")
  }

  return (
    <span>Category: { filter.join(', ') } </span>
  )
}