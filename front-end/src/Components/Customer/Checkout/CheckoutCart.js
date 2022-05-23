import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../../store/cart';
import trashIcon from '../../../assets/trash_icon.svg';
import style from './css/CheckoutCart.module.css';

const CheckoutCart = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className={ `container ${style.cart}` }>
      <h1 className={ style.title }>Meu carrinho</h1>
      {cartProducts.map((prod, i) => (
        <div className={ style.card } key={ i }>
          <div className={ style.info }>
            <p
              className={ style.name }
              data-testid={ `customer_checkout__element-order-table-name-${i}` }
            >
              {prod.name}
            </p>
            <div className={ style.quantPrice }>
              <p>
                <span
                  data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
                >
                  {prod.quant}
                </span>
                {' un.'}
              </p>
              <p>
                {'R$ '}
                <span
                  data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
                >
                  {(+prod.price * prod.quant).toFixed(2).toString().replace('.', ',') }
                </span>
              </p>
            </div>
          </div>
          <div className={ style.remove }>
            <button
              className="table-product-remove"
              data-testid={
                `customer_checkout__element-order-table-remove-${i}`
              }
              type="button"
              onClick={ () => removeItem(prod.id) }
            >
              <img src={ trashIcon } alt="Erase product" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutCart;
