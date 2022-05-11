import React from 'react';
import { useSelector } from 'react-redux';

function CheckoutTable() {
  /** usar redux */
  const cartChosenProduct = useSelector((state) => state.cartChosenProduct);
  /** funçao para o total(incluindo quantidade ja mutiplicada pelo preço) */
  /** sujeito a mudanças */
  const totalPriceEachProduct = (quantity, price) => {
    const unitPrice = (quantity * price).toFixed(2).replace('.', ',');
    return unitPrice;
  };

  return (
    <div className="checkout-table">
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
        <tbody>
          { cartChosenProduct.map((prod, index) => (/** pegar cartChosenProduct no store, cria no store/redux */
            <tr key="id" className="table-product-row">
              <td
                className="table-product-id"
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td
                className="table-product-name"
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                name
              </td>
              <td
                className="table-product-quantity"
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }

              >
                { prod.quantity }
              </td>
              <td
                className="table-product-price"
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                { `R$ ${prod.price.replace('.', ',')}` }
              </td>
              <td
                className="table-product-subtotal"
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                { `R$ ${totalPriceEachProduct(prod.quantity, prod.price)}` }
              </td>
              <td>
                <button
                  className="table-product-remove"
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  type="button"
                // onClick={ () => () }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
      <div className="checkout-table-total-price">
        Total: R$
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          { total.toFixed(2).replace('.', ',') }
        </span>
      </div>
    </div>
  );
}

export default CheckoutTable;
