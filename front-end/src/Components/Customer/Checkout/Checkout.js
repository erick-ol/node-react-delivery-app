import React from 'react';
import CheckoutCart from './CheckoutCart';
import CheckoutAddress from './CheckoutAddress';

function Checkout() {
  return (
    <div className="checkout-page">
      <CheckoutCart />
      <div className="relative">
        <CheckoutAddress />
      </div>
    </div>
  );
}

export default Checkout;
