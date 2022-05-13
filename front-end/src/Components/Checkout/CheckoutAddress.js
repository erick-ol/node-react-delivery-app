import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { salesPost } from '../../store/sale';
import Input from '../Forms/Input';

const CheckoutAddress = () => {
  const [seller, setSeller] = React.useState('2');
  const { info: { token, id } } = useSelector((state) => state.user);
  const { data } = useSelector((state) => state.sale);
  const { total, cartProducts } = useSelector((state) => state.cart);
  const address = useForm();
  const number = useForm();
  const error = (typeof address.error === 'string')
  || (typeof number.error === 'string');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate(`/customer/orders/${data}`);
  }, [data, navigate]);

  const handleClick = () => {
    const body = {
      userId: id,
      seller: 'Fulana Pereira',
      total_price: total,
      delivery_address: address.value,
      delivery_number: +number.value,
      products: cartProducts.map(({ name, quant }) => ({ name, quantity: quant })),
    };
    dispatch(salesPost(token, body));
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
          <option value="2">
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
