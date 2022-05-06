import React from 'react';
import { ProductCard } from '../Products/ProductCard';

export function ListProducts() {
  return (
    <div className="product-card-container">
      <ProductCard />
      <button type="button" data-testid="customer_products__button-cart"
      >
        Total
      </button>
    </div>
  );
}

export default ListProducts;
