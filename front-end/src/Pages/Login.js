import React from 'react';
import { Link } from 'react-router-dom';
import style from './css/Login.module.css';
import Button from '../Components/Forms/Button';
import FormLogin from '../Components/Login/LoginForm';

function Login() {
  return (
    <div className={ style.background }>
      <main className={ `${style.login} container` }>
        <h1>Olá, desejamos as boas vindas!</h1>
        <FormLogin />
        <Link to="/register">
          Você não tem uma conta?
          {' '}
          <Button
            data-testid="common_login__button-register"
          >
            Crie uma agora
          </Button>
        </Link>
      </main>
    </div>
  );
}

export default Login;
