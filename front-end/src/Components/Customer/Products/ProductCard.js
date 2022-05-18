import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeProduct, updateProduct } from '../../../store/cart';

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
    <section className="product-card-container">
      <div className="product-card-image-container">
        <p
          className="product-price"
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {price.replace('.', ',')}
        </p>
        <img
          src={ urlImage }
          alt={ name }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </div>
      <div className="product-card-quantity-container">
        <p
          className="product-name"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </p>
        <div className="product-card-quantity-input-container">
          <button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
            onClick={ decrement }
            disabled={ quantity === 0 }
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
    </section>
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
