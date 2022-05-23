import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useForm from '../../../Hooks/useForm';
import { eraseCart } from '../../../store/cart';
import { resetState, salesPost } from '../../../store/sale';
import Input from '../../Forms/Input';
import style from './css/CheckoutAddress.module.css';
import cardIcon from '../../../assets/card_icon.svg';

const CheckoutAddress = () => {
  const [seller, setSeller] = React.useState('');
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
    if (data) {
      dispatch(eraseCart());
      dispatch(resetState());
      navigate(`/customer/orders/${data}`);
    }
  }, [data, navigate, dispatch]);

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
    <div className={ style.detailsAddress }>
      <div className={ `container ${style.info}` }>
        <h2 className={ style.subtitle }>
          Detalhes e
          <br />
          Endereço de entrega:
        </h2>
        <div className={ style.select }>
          <select
            value={ seller }
            name="sellers"
            onChange={ (e) => setSeller(e.target.value) }
            data-testid="customer_checkout__select-seller"

          >
            <option value="" disabled>Pessoa Vendedora</option>
            <option value="2">
              Fulana Pereira
            </option>
          </select>
        </div>
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
        <div className={ style.totalFinish }>
          <p className={ style.total }>
            R$
            <span data-testid="customer_checkout__element-order-total-price">
              {total.toFixed(2).toString().replace('.', ',')}
            </span>
          </p>
          <button
            disabled={ error }
            type="button"
            data-testid="customer_checkout__button-submit-order"
            onClick={ handleClick }
          >
            <img src={ cardIcon } alt="card" />
            <span>Finalizar Pedido</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutAddress;
