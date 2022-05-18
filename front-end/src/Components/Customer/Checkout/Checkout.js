import React from 'react';
import CheckoutTable from './CheckoutTable';
import CheckoutAddress from './CheckoutAddress';

function Checkout() {
  return (
    <div className="checkout-page">
      <h2>Finalizar Pedido</h2>
      <CheckoutTable />
      <h2>Detalhes e Endereço para Entrega</h2>
      <CheckoutAddress />
    </div>
  );
}

export default Checkout;
