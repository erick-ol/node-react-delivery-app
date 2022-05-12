import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const { id, name, price, urlImage } = product;
  const [quantity, setQuantity] = React.useState(0);

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
            // onClick={ () => { decrement(); } }
          >
            -
          </button>
          <label htmlFor="count-input">
            <input
              id="count-input"
              data-testid={ `customer_products__input-card-quantity-${id}` }
              type="number"
              value={ quantity }
              onChange={ ({ target }) => setQuantity(target.quantity) }
            />
          </label>
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            // onClick={ () => { increment(); } }
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
