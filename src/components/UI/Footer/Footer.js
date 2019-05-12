import React from 'react';

import Subscription from '../Form/Subscription/Subscription';
import Btn from '../Btn/Btn';

import css from './Footer.css';

const footer = props => (
  <footer className={css.Footer}>
    <div className={css.Subscription}>
      <p>Subscribe for shop news, updates and special offers.</p>
      <Subscription />
      <Btn>DefaultBtn</Btn>
    </div>
    <div className={css.Container}>
      <ul className={css.Query}>
        <li>Questions?</li>
        <li>Help</li>
        <li>Track Order</li>
        <li>Returns</li>
      </ul>
      <ul className={css.Query}>
        <li>What's in store</li>
        <li>Women</li>
        <li>Men</li>
        <li>Product A - Z</li>
        <li>Buy Gif Vouchers</li>
      </ul>
      <ul className={css.Query}>
        <li>Follow Us</li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>YouTube</li>
      </ul>
      <ul className={css.License}>
        <li>
          © Shopaholic Ltd
        </li>
        <li>
          • Contact
        </li>
        <li>
          • Privacy Policy
        </li>
      </ul>
    </div>
  </footer>
);

export default footer;