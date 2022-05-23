/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { eraseCart } from '../../store/cart';
import { resetState } from '../../store/customerOrders';
import { userLogout } from '../../store/user';
import style from './css/Navbar.module.css';
import productsIcon from '../../assets/header_products.svg';
import listIcon from '../../assets/header_list.svg';
import basketIcon from '../../assets/header_basket.svg';
import exitIcon from '../../assets/header_exit.svg';

function Navbar() {
  const { info } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(userLogout());
    dispatch(eraseCart());
    dispatch(resetState());
    navigate('/login');
  };

  return (
    <header className={ style.background }>
      <p className={ `${style.username} container` }>
        Olá,
        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {` ${info.name}!`}
        </span>
      </p>
      <nav className={ `${style.navbar} container` }>
        <ul>
          <li>
            <NavLink
              data-testid="customer_products__element-navbar-link-products"
              to="/customer/products"
            >
              <img src={ productsIcon } alt="products link" />
            </NavLink>
          </li>
          <li>
            <NavLink
              data-testid="customer_products__element-navbar-link-orders"
              to="/customer/orders"
            >
              <img src={ listIcon } alt="orders link" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/customer/checkout">
              <img src={ basketIcon } alt="cart link" />
            </NavLink>
          </li>
          <li>
            <button
              type="button"
              onClick={ logout }
              data-testid="customer_products__element-navbar-link-logout"
            >
              <img src={ exitIcon } alt="logout" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
