import React from 'react';
import useForm from '../../Hooks/useForm';
import Input from '../Forms/Input';

const CheckoutAddress = () => {
  const [seller, setSeller] = React.useState('Fulana Pereira');
  const address = useForm();
  const number = useForm();
  const error = (typeof address.error === 'string')
  || (typeof number.error === 'string');

  const handleClick = () => {
    console.log(seller, address.value, number.value);
  };

  return (
    <div>
      <label className="checkout-address-input" htmlFor="sellers">
        P. Vendedora Responsável
        <select
          value={ seller }
          name="sellers"
          onChange={ (e) => setSeller(e.target.value) }
          data-testid="customer_checkout__select-seller"
        >
          <option value="Fulana Pereira">
            Fulana Pereira
          </option>
        </select>
      </label>
      <Input
        label="Endereço"
        dataTestId="customer_checkout__input-address"
        type="text"
        name="address"
        { ...address }
      />
      <Input
        label="Número"
        dataTestId="customer_checkout__input-addressNumber"
        type="text"
        name="number"
        { ...number }
      />
      <button
        disabled={ error }
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleClick }
      >
        Finalizar Pedido
      </button>
    </div>
  );
};

export default CheckoutAddress;
