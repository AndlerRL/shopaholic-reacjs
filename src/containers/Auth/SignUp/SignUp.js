import React, { useState, useEffect } from 'react';

import Modal from '../../../components/UI/Modal/Modal';

const SignUp = props => {
  return (
    <Modal
      modalClosed={props.signInClosed}
      show={props.showSignIn}>
      <h1>Sign Up Screen</h1>
    </Modal>
  );
};

export default SignUp;