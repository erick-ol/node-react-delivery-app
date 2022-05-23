import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { productsGet } from '../../../store/products';
import Error from '../../helper/Error';
import ProductCard from './ProductCard';
import style from './css/ProductList.module.css';
import Loading from '../../helper/Loading';

const ProductsList = () => {
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
    <div className={ `container ${style.list}` }>
      {loading && <Loading />}
      {data
      && data.map((product) => <ProductCard key={ product.id } product={ product } />)}
      <button
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ total === 0 }
        onClick={ handleClick }
        className={ style.total }
      >
        {'Total: '}
        <span>R$ </span>
        <span data-testid="customer_products__checkout-bottom-value">
          {total.toFixed(2).toString().replace('.', ',')}
        </span>
      </button>
      {error && <Error error={ error } />}
    </div>
  );
};

export default ProductsList;
