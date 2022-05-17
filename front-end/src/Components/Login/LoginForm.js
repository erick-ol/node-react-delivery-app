import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import { loginPost, resetLoginState } from '../../store/login';
import { saveUser } from '../../store/user';

const FormLogin = () => {
  const email = useForm('email');
  const password = useForm('password');
  const errorValidation = (typeof email.error === 'string')
  || (typeof password.error === 'string');
  const navigate = useNavigate();

  // redux
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.login);
  const { info } = useSelector((state) => state.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginPost(
      { email: email.value, password: password.value },
    ));
  };

  const handleNavigation = useCallback((role) => {
    if (role === 'customer') navigate('/customer/products');
    if (role === 'seller') navigate('/seller/orders');
    if (role === 'administrator') navigate('/admin/manage');
  }, [navigate]);

  React.useEffect(() => {
    if (data) {
      dispatch(saveUser(data));
      dispatch(resetLoginState());
      handleNavigation(data.role);
    }
  }, [data, dispatch, handleNavigation]);

  React.useEffect(() => {
    if (info) {
      handleNavigation(info.role);
    }
  }, [info, handleNavigation]);

  return (
    <form onSubmit={ handleSubmit }>
      <Input
        label="Login"
        dataTestId="common_login__input-email"
        type="text"
        name="email"
        page="login"
        { ...email }
      />

      <Input
        label="Senha"
        dataTestId="common_login__input-password"
        type="password"
        name="password"
        page="login"
        { ...password }
      />

      { errorValidation
        ? <Button disabled data-testid="common_login__button-login">Login</Button>
        : <Button data-testid="common_login__button-login">Login</Button>}

      { error && <p data-testid="common_login__element-invalid-email">{error}</p> }

      { loading && <p>Loading...</p> }
    </form>
  );
};

export default FormLogin;
