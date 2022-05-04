import React from 'react';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';

const RegisterForm = () => {
  const email = useForm('email');
  const password = useForm('password');
  const name = useForm('name');
  const error = (typeof email.error === 'string')
  || (typeof password.error === 'string')
  || (typeof name.error === 'string');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Cadastrou');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <Input
        label="Nome"
        dataTestId="common_register__input-name"
        type="text"
        name="name"
        page="register"
        { ...name }
      />

      <Input
        label="Login"
        dataTestId="common_register__input-email"
        type="text"
        name="email"
        page="register"
        { ...email }
      />

      <Input
        label="Senha"
        dataTestId="common_register__input-password"
        type="password"
        name="password"
        page="register"
        { ...password }
      />

      { error
        ? <Button disabled data-testid="common_register__button-register">Signup</Button>
        : <Button data-testid="common_register__button-register">Signup</Button>}
    </form>
  );
};

export default RegisterForm;
