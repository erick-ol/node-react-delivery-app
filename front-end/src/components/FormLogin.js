import React from 'react';
import { Link } from 'react-router-dom';

function FormLogin() {
  return (
    <form>
      <label htmlFor="login">
        Login
        <input id="login" data-data-testid="common_login__input-email" />
      </label>

      <label htmlFor="password">
        Senha
        <input id="password" data-testid="common_login__input-password" />
      </label>

      <button type="submit" data-testid="common_login__button-login">
        Login
      </button>

      <Link to="/register">
        <button type="button" data-testid="common_login__button-register">
          Ainda Não tenho conta
        </button>
      </Link>

    </form>
  );
}

export default FormLogin;
