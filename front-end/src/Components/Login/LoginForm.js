import React from 'react';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';

const FormLogin = () => {
  const email = useForm('email');
  const password = useForm('password');
  const error = (typeof email.error === 'string') || (typeof password.error === 'string');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Entrou');
  };

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

      { error
        ? <Button disabled data-testid="common_login__button-login">Login</Button>
        : <Button data-testid="common_login__button-login">Login</Button>}
    </form>
  );
};

export default FormLogin;
