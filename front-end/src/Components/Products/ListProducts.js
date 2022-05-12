import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsGet } from '../../store/products';
import ProductCard from './ProductCard';

const ListProducts = () => {
  const { info } = useSelector((state) => state.user);
  const { data, error, loading } = useSelector((state) => state.products);
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (info && !data) dispatch(productsGet(info.token));
  }, [info, dispatch, data]);

  return (
    <div className="product-card-container">
      {loading && <p>Loading...</p>}
      {data
      && data.map((product) => <ProductCard key={ product.id } product={ product } />)}
      <button
        type="button"
        data-testid="customer_products__button-cart"
      >
        Total:
        { ` ${total.toFixed(2).toString().replace('.', ',')}` }
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ListProducts;
