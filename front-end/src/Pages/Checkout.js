import React from 'react';
import { CustomerNavbar } from '../Components/Products/CustomerNavbar';
import CheckoutTable from '../Components/Checkout/CheckoutTable';
import CheckoutAddress from '../Components/Checkout/CheckoutAddress';

function Checkout() {
  return (
    <>
      <CustomerNavbar />
      <div className="checkout-page">
        <h2>Finalizar Pedido</h2>
        <CheckoutTable />
        <h2>Detalhes e Endereço para Entrega</h2>
        <CheckoutAddress />
      </div>
    </>
  );
}

export default Checkout;
