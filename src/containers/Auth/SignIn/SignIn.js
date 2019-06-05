import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';

import * as actions from '../../../store/actions';
import { checkValidity, updateObject } from '../../../share/utility';
import Modal from '../../../components/UI/Modal/Modal';
import Input from '../../../components/UI/Form/Input/Input';
import { Loading } from '../../../components/UI/Loading/Loading';
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

  useEffect(() => {
    /* if (!props.isShopping && props.authRedirectPath !== '/')
      props.onSetAuthRedirectPath('/'); */
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

    props.onAuth(controlsIn.email.value, controlsIn.password.value);
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
  
  let error = null;
  
  if (props.isLoading)
    form = <Loading />;

  if (props.error) 
    error = <p className={'z-depth-1 ' + css.ErrorMsg}>ERROR: { props.error.message }</p>  
  
  return (
    <Modal
      modalClosed={props.signInClosed}
      show={props.showSignIn}>
      <form 
        className={css.SignIn}
        onSubmit={submitHandler}>
        <h4 className={css.Title}>Please, Login to Shopaholic</h4>
        { error }
        { form }
        <p>Don't have an account? <span onClick={props.switchSignUp}> Sign Up </span> here!</p>
        <div className={css.BtnContainer}>
          <Btn 
            btnColor="secondary"
            btnType="contained"
            clicked={props.backShop}>
            Back to Shop
          </Btn>
          <Btn
            submit={true}
            btnColor="primary"
            btnType="contained"
            clicked={submitHandler}>
            Login
          </Btn>
        </div>
      </form>
    </Modal>
  )
};

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    onCheckout: state.orders.onCheckout,
    authRedirectPath: state.auth.authRedirectPath,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
    onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SignIn));