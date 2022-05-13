import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { productsGet } from '../../store/products';
import ProductCard from './ProductCard';

const ListProducts = () => {
  const { info } = useSelector((state) => state.user);
  const { data, error, loading } = useSelector((state) => state.products);
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (info && !data) dispatch(productsGet(info.token));
  }, [info, dispatch, data]);

  const handleClick = () => {
    navigate('/customer/checkout');
  };

  return (
    <div className="product-card-container">
      {loading && <p>Loading...</p>}
      {data
      && data.map((product) => <ProductCard key={ product.id } product={ product } />)}
      <button
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ total === 0 }
        onClick={ handleClick }
      >
        Total: R$
        <span data-testid="customer_products__checkout-bottom-value">
          {total.toFixed(2).toString().replace('.', ',')}
        </span>
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ListProducts;
