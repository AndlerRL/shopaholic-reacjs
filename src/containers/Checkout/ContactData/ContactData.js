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
  const [taxes, setTaxes] = useState(props.taxes);
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
        valid: true,
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
      value: props.userData.address_1 !== null ? props.userData.address_1 : '',
      validation: {
        required: true,
        valid: props.userData.address_1 !== null ? true : false,
        touched: false
      }
    },
    address_2: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Floor 3, Apt 23',
      },
      label: 'Address 2',
      value: props.userData.address_2 !== null ? props.userData.address_2 : '',
      validation: {
        required: false,
        valid: props.userData.address_2 !== null ? true : false,
        touched: false
      }
    },
    city: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'San José',
      },
      label: 'City',
      value: props.userData.city !== null ? props.userData.city : '',
      validation: {
        required: true,
        valid: props.userData.city !== null ? true : false,
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
      value: props.userData.country !== null ? props.userData.country : '',
      validation: {
        required: true,
        valid: props.userData.country !== null ? true : false,
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
      value: props.userData.postal_code !== null ? props.userData.postal_code : '',
      validation: {
        required: true,
        valid: props.userData.postal_code !== null ? true : false,
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
      value: props.userData.shipping_region_id !== 1 ? props.userData.shipping_region_id : 1,
      validation: {
        required: true,
        valid: props.userData.shipping_region_id > 1 ? true : false,
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
      value: props.userData.email !== null ? props.userData.email : '',
      validation: {
        required: true,
        valid: props.userData.email !== null ? true : false,
        touched: false,
        emailFormat: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        minLength: 6
      }
    },
    mob_phone: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: '606 223-3001',
      },
      label: 'Mobile Phone',
      value: props.userData.mob_phone !== null ? props.userData.mob_phone : '',
      validation: {
        required: true,
        valid: props.userData.mob_phone !== null ? true : false,
        touched: false,
        minLength: 7,
      }
    },
    day_phone: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: '606 387-2398',
      },
      label: 'Day Phone',
      value: props.userData.day_phone !== null ? props.userData.day_phone : '',
      validation: {
        required: false,
        valid: props.userData.mob_phone !== null ? true : false,
        touched: false,
        minLength: 7,
      }
    },
    eve_phone: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: '606 366-5513',
      },
      label: 'Evening Phone',
      value: props.userData.eve_phone !== null ? props.userData.eve_phone : '',
      validation: {
        required: false,
        valid: props.userData.eve_phone !== null ? true : false,
        touched: false,
        minLength: 7,
      }
    }
  });
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    M.AutoInit();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const orderItemsHandler = e => {
    e.preventDefault();

    const cart_id = JSON.parse(localStorage.getItem('cart_id'));
    const formData = {};

    for (let formEleId in orderForm) {
      formData[formEleId] = orderForm[formEleId].value;
    }

    let taxId = 2;
    let shipment_id = parseInt(formData.shipment_option);
    let region = 'N/A';

    if (shipment_id === 2)
      region = 'US / Canada'

    if (shipment_id === 3)
      region = 'Europe'

    if (shipment_id === 4)
      region = 'Rest of World'

    if (shipment_id === 2 || shipment_id === 3)
      taxId = 1;

    const userData = {
      name: formData.name,
      email: formData.email,
      day_phone: formData.day_phone,
      eve_phone: formData.eve_phone,
      mob_phone: formData.mob_phone
    };
    const userAddress = {
      address_1: formData.address_1,
      address_2: formData.address_2,
      city: formData.city,
      region: region,
      postal_code: formData.postal_code,
      country: formData.country,
      shipping_region_id: shipment_id
    };
    const orderData = {
      cart_id: cart_id,
      shipping_id: shipment_id,
      tax_id: taxId
    }

    props.onUpdateCustomer(userData);
    props.onUpdateAddress(userAddress);
    props.onCreateOrder(orderData);
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

  let tax = taxes.map(tax => {
    if (tax.tax_id === 2)
      return (
        <li key={tax.tax_id}>
          *{ tax.tax_type }
          <span>Percentage to pay: { tax.tax_percentage }%</span>
        </li>
      );
  });

  if (orderForm.shipment_option.value === "2" || orderForm.shipment_option.value === "3")
    tax = taxes.map(tax => {
      if (tax.tax_id === 1)
        return (
          <li key={tax.tax_id}>
            *{ tax.tax_type }
            <span>Percentage to pay: { tax.tax_percentage }%</span>
          </li>
        );
    });

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
  ));

  if (props.isLoading)
    form = <Loading />

  return (
    <ContactDataSummary
      submit={orderItemsHandler}
      form="Form">
      <div>
        { form }
      </div>
      <ul>
        { tax }
      </ul>
      <BtnIcon
        iconType="fas"
        iconColor="#33691e"
        icon="dollar-sign"
        btnType="contained"
        btnColor="primary"
        size="large"
        clicked={orderItemsHandler}
        disabled={!formIsValid}>
        Purchase Order
      </BtnIcon>
    </ContactDataSummary>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.orders.isLoading,
    userData: state.auth.userData,
    tax: state.tax.tax,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRegionId: regionId => dispatch(actions.regionId(regionId)),
    onTaxId: taxId => dispatch(actions.taxById(taxId)),
    onCreateOrder: (cartId, shippingId, taxId) => dispatch(actions.createOrder(cartId, shippingId, taxId)),
    onUpdateCustomer: userData => dispatch(actions.updateUser(userData)),
    onUpdateAddress: userAddress => dispatch(actions.updateAddress(userAddress)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);