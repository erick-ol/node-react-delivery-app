import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutTbody from './CheckoutTbody';

const CheckoutTable = () => {
  const { total } = useSelector((state) => state.cart);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover</th>
          </tr>
        </thead>
        <CheckoutTbody />
      </table>
      <div>
        Total: R$
        <span data-testid="customer_checkout__element-order-total-price">
          {total.toFixed(2).toString().replace('.', ',')}
        </span>
      </div>
    </>
  );
};

export default CheckoutTable;
