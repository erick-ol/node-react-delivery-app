import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { eraseCart } from '../../store/cart';
import { userLogout } from '../../store/user';

function CustomerNavbar() {
  const { info } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(userLogout());
    dispatch(eraseCart());
    navigate('/login');
  };

  return (
    <div className="customer-navbar-container">
      <div className="requests-container">
        <p data-testid="customer_products__element-navbar-link-products">
          <Link to="/customer/products">Produtos</Link>
        </p>
        <p data-testid="customer_products__element-navbar-link-orders">
          <Link to="/customer/orders">Pedidos</Link>
        </p>
      </div>
      <div className="customer-name-container">
        <p data-testid="customer_products__element-navbar-user-full-name">
          {info.name}
        </p>
      </div>
      <div className="customer-exit-container">
        <button
          type="button"
          onClick={ logout }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </div>
    </div>
  );
}

export default CustomerNavbar;
