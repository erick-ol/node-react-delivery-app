import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/forms/Button';
import FormLogin from '../components/login/FormLogin';

function Login() {
  return (
    <main>
      <h1>App Delivery</h1>
      <FormLogin />
      <Link to="/register">
        <Button data-testid="common_login__button-register">Ainda Não tenho conta</Button>
      </Link>
    </main>
  );
}

export default Login;
