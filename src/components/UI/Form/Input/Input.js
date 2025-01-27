import React from 'react';

import IconM from '../../Icons/IconM';

import css from './Input.css';

const input = props => {
  let inputElement = null;
  let validationError = null;
  const invalid = [];

  if (props.invalid && props.shouldValidate && props.touched)
    invalid.push(css.Invalid)

  if (props.invalid && props.touched)
    validationError = (
      <div className={css.ErrorMsg}>
        <IconM size="small" icon="report" />
        <span className={"helper-text"}>
          Please, enter a valid {props.label}.
        </span>
      </div>
    )

  if (props.invalid && props.touched && props.elementConfig.type === 'textarea')
    validationError = (
      <div className={css.ErrorMsg}>
        <IconM size="small" icon="report" />
        <span className={"helper-text"}>
          [Reminder] {props.elementConfig.placeholder}
        </span>
      </div>
    )

  if (props.invalid && props.touched && props.label === 'Confirm Password')
    validationError = (
      <div className={css.ErrorMsg}>
        <IconM size="small" icon="report" />
        <span className={"helper-text"}>
          Please, re-enter and confirm your Password.
        </span>
      </div>
    )

  switch (props.elementType) {
    case ('input'):
      inputElement =<input
        className={invalid}
        ref={props.inputRef} 
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />
      break;
    case ('email'):
      inputElement = <input
        className={invalid}
        ref={props.inputRef} 
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />
      break;
    case ('textarea'):
      inputElement = <textarea
        className={"materialize-textarea " + invalid}
        ref={props.inputRef}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />
      break;
    case ('select'):
      inputElement = (
        <select
          className={invalid}
          ref={props.inputRef}
          value={props.value}
          onChange={props.changed}>
          { props.elementConfig.options.map(option => (
            <option
              key={option.value}
              value={option.value}>
              {option.displayValue}
            </option>
          )) }
        </select>
      )
      break;
    case ('password'):
      inputElement = (
        <input
          className={invalid} 
          ref={props.inputRef}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed} />
      )
      break;
    default:
      inputElement = <input
        className={invalid}
        ref={props.inputRef}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />
  }

  return (
    <div className={["input-field", css.Input, props.cssName].join(' ')}>
      { inputElement }
      <label htmlFor={props.for}>{props.label}</label>
      { validationError }
    </div>
  )
};

export default input;