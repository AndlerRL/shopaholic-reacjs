import React from 'react';

import css from './ProductsHeader.css';

const productsHeader = props => (
  <div className={css.ProductsHeader}>
    <h2>Mens Wear</h2>
    <div className={css.Categories}>
      <ul>
        <li>Accessories</li>
        <li>ASOS Basic Tops</li>
        <li>Bags</li>
        <li>Caps & Hats</li>
        <li>Gifts</li>
        <li>Grooming</li>
      </ul>
      <ul>
        <li>Hoodies & Sweatshirts</li>
        <li>Jackets & Coats</li>
        <li>Jeans</li>
        <li>Jewelry</li>
        <li>Joggers</li>
        <li>Jumpers & Cardigans</li>
      </ul>
      <ul>
        <li>Leather Jackets</li>
        <li>Long Sleave T-Shirts</li>
        <li>Loungewear</li>
        <li>Oversized & Longline</li>
        <li>Polo Shirts</li>
        <li>Shirts</li>
      </ul>
    </div>
  </div>
);

export default productsHeader;