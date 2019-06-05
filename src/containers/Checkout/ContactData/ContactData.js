import { connect } from 'react-redux';
import M from 'materialize-css';
import React, { useEffect, useState } from 'react';

import * as actions from '../../../store/actions';
import { updateObject, checkValidity } from '../../../share/utility';
import ContactDataSummary from '../../../components/CheckoutSummary/ContactDataSummary/ContactDataSummary';
import Input from '../../../components/UI/Form/Input/Input';
import BtnIcon from '../../../components/UI/Btn/BtnIcon';
import { Loading } from '../../../components/UI/Loading/Loading';

const ContactData = props => {
  const [regionsOpt, setRegionsOpt] = useState(props.regions);
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Jane Doe',
      },
      label: 'Your Name',
      value: props.userData.name,
      validation: {
        required: true,
        valid: false,
        touched: false
      }
    },
    address_1: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: '1300 Tuxedo rd',
      },
      label: 'Address 1',
      value: '',
      validation: {
        required: true,
        valid: false,
        touched: false
      }
    },
    address_2: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Apt 23',
      },
      label: 'Address 2',
      value: '',
      validation: {
        required: false,
        valid: false,
        touched: false
      }
    },
    state: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Texas',
      },
      label: 'State',
      value: '',
      validation: {
        required: true,
        valid: false,
        touched: false
      }
    },
    country: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'United States',
      },
      label: 'Country',
      value: '',
      validation: {
        required: true,
        valid: false,
        touched: false
      }
    },
    postal_code: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: '10109',
      },
      label: 'Postal Code',
      value: '',
      validation: {
        required: true,
        valid: false,
        touched: false,
        minLength: 5,
        maxLength: 5
      }
    },
    shipment_option: {
      elementType: 'select',
      elementConfig: {
        options: regionsOpt
      },
      label: 'Region',
      value: 'Please Select',
      validation: {
        required: true,
        valid: false,
        touched: false
      }
    },
    email: {
      elementType: 'email',
      elementConfig: {
        type: 'text',
        placeholder: 'example@example.com',
      },
      label: 'E-mail',
      value: props.userData.email,
      validation: {
        required: true,
        valid: false,
        touched: false,
        emailFormat: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        minLength: 6
      }
    },
    mob_phone: {
      elementType: 'input',
      elementConfig: {
        type: 'number',
        placeholder: '606 223-3001',
      },
      label: 'Mobile Phone',
      value: '',
      validation: {
        required: true,
        valid: false,
        touched: false,
        minLength: 7,
      }
    },
    day_phone: {
      elementType: 'input',
      elementConfig: {
        type: 'number',
        placeholder: '606 387-2398',
      },
      label: 'Day Phone',
      value: '',
      validation: {
        required: false,
        valid: false,
        touched: false,
        minLength: 7,
      }
    },
    eve_phone: {
      elementType: 'input',
      elementConfig: {
        type: 'number',
        placeholder: '606 366-5513',
      },
      label: 'Evening Phone',
      value: '',
      validation: {
        required: false,
        valid: false,
        touched: false,
        minLength: 7,
      }
    }
  });
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    M.AutoInit();
  }, [])

  const orderItemsHandler = e => {
    e.preventDefault();

    const formData = {};

    for (let formEleId in orderForm) {
      formData[formEleId] = orderForm[formEleId].value;
    }

    //const order = {}

    //props.onOrderItems(order)
  }

  const inputChangedHandler = (e, inputId) => {
    let formIsValid = true;
    const updatedFormEle = updateObject(orderForm[inputId], {
      value: e.target.value,
      validation: {...orderForm[inputId].validation,
        valid: checkValidity(e.target.value, orderForm[inputId].validation),
        touched: true
      }
    });
    const updatedOrderForm = updateObject(orderForm, {
      [inputId]: updatedFormEle
    });

    for (let inputIds in updatedOrderForm)
      formIsValid = updatedOrderForm[inputIds].validation.valid && formIsValid;

    setOrderForm(updatedOrderForm);
    setFormIsValid(formIsValid);
  }

  const formElementsArray = [];

  for (let key in orderForm) {
    formElementsArray.push({
      id: key,
      config: orderForm[key]
    })
  }

  let form = formElementsArray.map(formEle => (
    <Input
      invalid={!formEle.config.validation.valid}
      shouldValidate={formEle.config.validation}
      touched={formEle.config.validation.touched}
      key={formEle.id}
      elementType={formEle.config.elementType}
      elementConfig={formEle.config.elementConfig}
      value={formEle.config.value}
      label={formEle.config.label}
      for={formEle.id}
      changed={e => inputChangedHandler(e, formEle.id)} />
  ))

  if (props.isLoading)
    form = <Loading />

  return (
    <ContactDataSummary
      submit={orderItemsHandler}>
      <div>
        { form }
      </div>
      <BtnIcon
        btnType="contained"
        btnColor="primary"
        size="large"
        disabled={!formIsValid}>
        Purchase Order
      </BtnIcon>
    </ContactDataSummary>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.auth.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRegionId: regionId => dispatch(actions.regionId(regionId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);