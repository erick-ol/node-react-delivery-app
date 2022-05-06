import React from 'react';

function ProductCard() {
  return (
    <section className="product-card-container">
      <div className="product-card-image-container">
        <p
          className="product-price"
          data-testid="customer_products__element-card-price-id"
        >
          preço

        </p>
        <img
          src="urlImage"
          alt="name"
          data-testid="customer_products__img-card-bg-image-id"
        />
      </div>
      <div className="product-card-quantity-container">
        <p
          className="product-name"
          data-testid="customer_products__element-card-title-id"
        >
          nome
        </p>
        <div className="product-card-quantity-input-container">
          <button
            data-testid="customer_products__button-card-rm-item-id"
            type="button"
            // onClick={ () => { decrement(); } }
          >
            -
          </button>
          <label htmlFor="count-input">
            <input
              id="count-input"
              data-testid="customer_products__input-card-quantity-id"
            />
          </label>
          <button
            data-testid="customer_products__button-card-add-item-id"
            type="button"
            // onClick={ () => { increment(); } }
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
