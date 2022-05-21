import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Forms/Button';
import RegisterForm from '../Components/Register/RegisterForm';
import style from './css/Register.module.css';

function Register() {
  return (
    <div className={ style.background }>
      <main className={ `${style.register} container` }>
        <h1>Nova conta</h1>
        <RegisterForm />
        <Link to="/login">
          Já possui uma conta?
          {' '}
          <Button>
            Faça o login.
          </Button>
        </Link>
      </main>
    </div>
  );
}

export default Register;
