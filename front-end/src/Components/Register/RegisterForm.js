import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import { registerPost, resetRegisterState } from '../../store/register';
import { saveUser } from '../../store/user';
import style from './css/RegisterForm.module.css';
import Error from '../helper/Error';
import Loading from '../helper/Loading';

const RegisterForm = () => {
  const email = useForm('email');
  const password = useForm('password');
  const name = useForm('name');
  const errorValidation = (typeof email.error === 'string')
  || (typeof password.error === 'string')
  || (typeof name.error === 'string');
  const navigate = useNavigate();

  // redux
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.register);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerPost(
      {
        name: name.value,
        email: email.value,
        password: password.value,
        role: 'customer' },
    ));
  };

  React.useEffect(() => {
    if (data) {
      dispatch(saveUser(data));
      dispatch(resetRegisterState());
      navigate('/customer/products');
    }
  }, [data, navigate, dispatch]);

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

      <Button
        disabled={ errorValidation }
        data-testid="common_register__button-register"
        className={ style.button }
      >
        Signup
      </Button>

      { error && (
        <p data-testid="common_register__element-invalid_register">
          <Error error={ error } />
        </p>
      ) }

      { loading && <Loading /> }
    </form>
  );
};

export default RegisterForm;
