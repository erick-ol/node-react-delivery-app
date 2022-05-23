/* eslint-disable no-magic-numbers */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeProduct, updateProduct } from '../../../store/cart';
import style from './css/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { id, name, price, urlImage } = product;
  const [quantity, setQuantity] = React.useState(0);
  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => {
    setQuantity(+value);
    if (+value === 0) dispatch(removeProduct(id));
    else {
      dispatch(updateProduct({
        id,
        price,
        quant: +value,
        name,
      }));
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
    dispatch(updateProduct({
      id,
      price,
      quant: quantity + 1,
      name,
    }));
  };

  const decrement = () => {
    setQuantity(quantity - 1);
    if (quantity - 1 === 0) dispatch(removeProduct(id));
    else {
      dispatch(updateProduct({
        id,
        price,
        quant: quantity - 1,
        name,
      }));
    }
  };

  return (
    <div className={ style.card }>
      <div className={ style.image }>
        <img
          src={ urlImage }
          alt={ name }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </div>
      <div className={ style.info }>
        <p
          className={ style.name }
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </p>
        <div className={ style.price }>
          <p className={ style.discount }>
            {'R$ '}
            <span data-testid={ `customer_products__element-card-price-${id}` }>
              {((price * 1.5).toFixed(2)).toString().replace('.', ',')}
            </span>
          </p>
          <p>
            {'R$ '}
            <span data-testid={ `customer_products__element-card-price-${id}` }>
              {price.replace('.', ',')}
            </span>
          </p>
        </div>
        <div className={ style.quantity }>
          <button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
            onClick={ decrement }
            disabled={ quantity === 0 }
            className={ style.decrement }
          >
            -
          </button>
          <label htmlFor="count-input">
            <input
              id="count-input"
              data-testid={ `customer_products__input-card-quantity-${id}` }
              type="number"
              value={ quantity }
              onChange={ onChange }
            />
          </label>
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            onClick={ increment }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }),
}.isRequired;

export default ProductCard;
