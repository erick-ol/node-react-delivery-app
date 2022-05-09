import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsGet } from '../../store/products';
import ProductCard from './ProductCard';

const ListProducts = () => {
  const { token } = useSelector((state) => state.token);
  const { data, error, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (token && !data) dispatch(productsGet(token));
  }, [token, dispatch, data]);

  return (
    <div className="product-card-container">
      {loading && <p>Loading...</p>}
      {data
      && data.map((product) => <ProductCard key={ product.id } product={ product } />)}
      <button
        type="button"
        data-testid="customer_products__button-cart"
      >
        Total
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ListProducts;
