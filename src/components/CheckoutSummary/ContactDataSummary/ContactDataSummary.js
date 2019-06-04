import React from 'react';

import css from './ContactData.css';

const contactDataSummary = props => (
  <div className={css.ContactDataSummary}>
    <h4>Update your Data</h4>
    <form onSubmit={props.submit}>
      { props.children }
    </form>
  </div>
);

export default contactDataSummary;