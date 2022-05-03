import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Forms/Button';
import FormLogin from '../Components/Login/LoginForm';

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
