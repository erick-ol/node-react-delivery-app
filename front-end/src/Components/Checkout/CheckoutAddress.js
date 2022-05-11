import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

function CheckoutAddress() {
  /** pegar cartChosenProduct no store, criar/redux  para usar na soma */
  // const cartChosenProduct = useSelector((state) => state.cartChosenProduct);
  // const [filterSellers, _setFilterSellers] = useState([]);
  const [filterSellers] = useState([]);
  // const [seller, _setSeller] = useState(0);
  const [seller] = useState(0);

  /** implemetar removeItem */
  // const removeItem = () => {};

  return (
    <section className="checkout-address">
      <div className="checkout-address-input-container">
        <label className="checkout-address-input" htmlFor="sellers">
          P. Vendedora Responsável
          <select
            required
            value={ seller }
            name="sellers"
            // onChange={ () => () }
            data-testid="customer_checkout__select-seller"
          >
            {
              filterSellers
                .map((userSeller, index) => (
                  <option key={ index } value={ userSeller.id }>
                    { userSeller.name }
                  </option>))
            }
          </select>
        </label>
        <label className="checkout-address-input street-name" htmlFor="address">
          Endereço
          <input
            required
            type="text"
            name="address"
            data-testid="customer_checkout__input-address"
            // onChange={ () => () }
          />
        </label>
        <label className="checkout-address-input house-number" htmlFor="number">
          Número
          <input
            required
            type="text"
            name="number"
            data-testid="customer_checkout__input-addressNumber"
            // onChange={ () => () }
          />
        </label>
      </div>
      <button
        className="checkout-button"
        type="submit"
        data-testid="customer_checkout__button-submit-order"
        // onClick={ () => () }
      >
        Finalizar Pedido
      </button>
    </section>
  );
}

export default CheckoutAddress;
