import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import { checkValidity, updateObject } from '../../../share/utility';
import Modal from '../../../components/UI/Modal/Modal';
import Input from '../../../components/UI/Form/Input/Input';
import Loading from '../../../components/UI/Loading/Loading';
import Btn from '../../../components/UI/Btn/Btn';

import css from '../Auth.css';

const SignIn = props => {
  const [controlsIn, setControlsIn] = useState({
    email: {
      elementType: 'email',
      elementConfig: {
        type: 'text',
        placeholder: 'E-mail Address',
      },
      label: 'E-mail',
      value: '',
      validation: {
        required: true,
        emailFormat: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        minLength: 6
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'password',
      },
      label: 'Password',
      value: '',
      validation: {
        required: true,
        minLength: 6
      },
      valid: false,
      touched: false,
    }
  });
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    /* if (!props.building && props.authRedirectPath !== '/')
      props.onSetAuthRedirectPath(); */
  }, [])

  const inputChangedHandler = (e, controlName) => {
    const updatedControlsIn = updateObject(controlsIn, {
      [controlName]: updateObject(controlsIn[controlName], {
        value: e.target.value,
        valid: checkValidity(e.target.value, controlsIn[controlName].validation),
        touched: true
      })
    });
    
    setControlsIn(updatedControlsIn)
  }

  const submitHandler = e => {
    e.preventDefault();
  }

  const formEleArray = [];

  for (let key in controlsIn) {
    formEleArray.push({
      id: key,
      config: controlsIn[key]
    });
  }

  let form = formEleArray.map(formEle => (
    <Input
      key={formEle.id}
      invalid={!formEle.config.valid}
      shouldValidate={formEle.config.validation}
      touched={formEle.config.touched}
      elementType={formEle.config.elementType}
      elementConfig={formEle.config.elementConfig}
      value={formEle.config.value}
      label={formEle.config.label}
      for={formEle.id}
      changed={e => inputChangedHandler(e, formEle.id)} />
  ));
  
  if (props.loading)
    form = <Loading />;

  let error = null;

  if (props.error) 
    error = <p className={'z-depth-1 ' + css.ErrorMsg}>ERROR: { props.error.message }</p>  

  return (
    <Modal
      modalClosed={props.signInClosed}
      show={props.showSignIn}>
      <form 
      className={css.SignIn}
      onSubmit={submitHandler}>
        { error }
        { form }
        <div className={css.BtnContainer}>
          <Btn 
            btnColor="secondary"
            btnType="contained">
            Back to Shop
          </Btn>
          <Btn 
            btnColor="primary"
            btnType="contained">
            Login
          </Btn>
        </div>
      </form>
    </Modal>
  )
};

export default SignIn;