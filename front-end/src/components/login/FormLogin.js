import React from 'react';
import Input from '../forms/Input';
import useForm from '../../hooks/useForm';
import Button from '../forms/Button';

const FormLogin = () => {
  const email = useForm('email');
  const password = useForm('password');
  const [error, setError] = React.useState(true);

  React.useEffect(() => {
    if (email.error || password.error) {
      setError(true);
    } else {
      setError(false);
    }
  }, [email.error, password.error]);

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
        { ...email }
      />

      <Input
        label="Senha"
        dataTestId="common_login__input-password"
        type="password"
        name="password"
        { ...password }
      />

      { error
        ? <Button disabled data-testid="common_login__button-login">Login</Button>
        : <Button data-testid="common_login__button-login">Login</Button>}
    </form>
  );
};

export default FormLogin;
