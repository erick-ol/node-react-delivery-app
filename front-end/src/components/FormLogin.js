import React from 'react';

function FormLogin() {
  return(
    <form>

      <label htmlFor="login">
        Login
        <imput id="login" data-data-testid="common_login__input-email"/>
      </label>

      <label htmlFor="password">
        Senha
        <imput id="password" data-testid="common_login__input-password"/>
      </label>

      <button type="submit" data-testid="common_login__button-login">
        Login
      </button>

      <button type="button" data-testid="common_login__button-register">
        Ainda Não tenho conta
      </button>

    </form>
  )
}

export default FormLogin
