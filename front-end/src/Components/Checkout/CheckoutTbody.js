import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../store/cart';

const CheckoutTbody = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <tbody>
      {cartProducts.map((prod, i) => (
        <tr key={ i }>
          <td
            data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
          >
            {i + 1}
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-name-${i}` }
          >
            {prod.name}
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
          >
            {prod.quant}
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
          >
            {prod.price.replace('.', ',')}
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
          >
            {(+prod.price * prod.quant).toFixed(2).toString().replace('.', ',') }
          </td>
          <td>
            <button
              className="table-product-remove"
              data-testid={
                `customer_checkout__element-order-table-remove-${i}`
              }
              type="button"
              onClick={ () => removeItem(prod.id) }
            >
              Remover
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default CheckoutTbody;
