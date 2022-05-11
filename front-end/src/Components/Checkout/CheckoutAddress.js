import React from 'react';
// tests
function CheckoutAddress() {
  return (
    <section className="checkout-address">
      <div className="checkout-address-input-container">
        <label className="checkout-address-input" htmlFor="sellers">
          P. Vendedora Responsável
          <select
            required
            name="sellers"
            data-testid="customer_checkout__select-seller"
            // onChange={ () => () }
          >
            <option key="value" value="id">
              name
            </option>
            ))

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
