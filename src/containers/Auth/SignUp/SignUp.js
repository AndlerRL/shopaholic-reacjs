import { connect } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';

import * as actions from '../../../store/actions';
import { checkValidity, updateObject } from '../../../share/utility';
import Modal from '../../../components/UI/Modal/Modal';
import Input from '../../../components/UI/Form/Input/Input';
import { Loading } from '../../../components/UI/Loading/Loading';
import Btn from '../../../components/UI/Btn/Btn';

import css from '../Auth.css';

const SignUp = props => {
  const [controlsUp, setControlsUp] = useState({
    name: {
      elementType: 'text',
      elementConfig: {
        type: 'text',
        placeholder: 'John Doe',
      },
      label: 'Your Name',
      value: '',
      validation: {
        required: true,
        minLength: 6,
        maxLength: 20 
      },
      valid: false,
      touched: false,
    },
    email: {
      elementType: 'email',
      elementConfig: {
        type: 'text',
        placeholder: 'example@example.com',
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
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
    confirmPassword: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'password',
      },
      label: 'Confirm Password',
      value: '',
      validation: {
        required: true,
        minLength: 6,
        sameAsPW: true
      },
      valid: false,
      touched: false,
    }
  });
  const [isSignup, setIsSignup] = useState(true);
  const [pw, setPW] = useState(null);
  const [cpw, setCPW] = useState(null);
  const pwRef = useRef();
  let checkPW = pw === cpw && (pw !== '' && cpw !== '');

  useEffect(() => {
    console.log(pw, cpw)
  }, [pw, cpw])

  const inputChangedHandler = (e, controlName) => {
    setPW(pwRef.current.parentElement.parentElement[2].value);
    setCPW(pwRef.current.value);
    const updatedControlsUp = updateObject(controlsUp, {
      [controlName]: updateObject(controlsUp[controlName], {
        value: e.target.value,
        valid: checkValidity(e.target.value, controlsUp[controlName].validation, pw, cpw),
        touched: true
      })
    });
    
    setControlsUp(updatedControlsUp);
  }

  const submitHandler = e => {
    e.preventDefault();
    props.onRegisterAuth(controlsUp.name.value, controlsUp.email.value, controlsUp.password.value);
  }

  const formEleArray = [];

  for (let key in controlsUp) {
    formEleArray.push({
      id: key,
      config: controlsUp[key]
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
      inputRef={pwRef}
      changed={e => inputChangedHandler(e, formEle.id)} />
  ));
  
  if (props.loading)
    form = <Loading />;

  let error = null;

  if (props.error) 
    error = <p className={'z-depth-1 ' + css.ErrorMsg}>ERROR: { props.error.message }</p>  

  return (
    <Modal
      modalClosed={props.signUpClosed}
      show={props.showSignUp}>
      <form 
        className={css.SignUp}
        onSubmit={submitHandler}>
        <h4 className={css.Title}>Please, Sign Up to Shopaholic</h4>
        { error }
        { form }
        <p>Already have an account? <span onClick={props.switchSignIn}> Sign In </span> here!</p>
        <div className={css.BtnContainer}>
          <Btn 
            btnColor="secondary"
            btnType="contained"
            clicked={props.backShop}>
            Back to Shop
          </Btn>
          <Btn 
            btnColor="primary"
            btnType="contained"
            clicked={submitHandler}
            disabled={!checkPW}>
            Sign Up
          </Btn>
        </div>
      </form>
    </Modal>
  )
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== "",
    isLoading: state.auth.isLoading,
    error: state.auth.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRegisterAuth: (name, email, password) => dispatch(actions.authRegister(name, email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);