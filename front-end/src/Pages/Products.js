import React from 'react';
import { CustomerNavbar } from '../Components/Products/CustomerNavbar';
import ListProducts from '../Components/Products/ListProducts';

function Product() {
  return (
    <main>
      <div>
        <CustomerNavbar />
        <ListProducts />
      </div>
    </main>
  );
}

export default Product;
