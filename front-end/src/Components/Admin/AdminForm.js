import React from 'react';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const AdminForm = () => {
  const [role, setRole] = React.useState('');
  const email = useForm('email');
  const password = useForm('password');
  const name = useForm('name');
  const errorValidation = (typeof email.error === 'string')
  || (typeof password.error === 'string')
  || (typeof name.error === 'string')
  || (role === '');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cadastrou');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <Input
        label="Nome"
        dataTestId="admin_manage__input-name"
        type="text"
        name="name"
        page="register"
        { ...name }
      />
      <Input
        label="Email"
        dataTestId="admin_manage__input-email"
        type="text"
        name="email"
        page="register"
        { ...email }
      />
      <Input
        label="Senha"
        dataTestId="admin_manage__input-password"
        type="password"
        name="password"
        page="register"
        { ...password }
      />

      <label htmlFor="roles">
        Tipo
        <select
          value={ role }
          name="roles"
          onChange={ (e) => setRole(e.target.value) }
          data-testid="admin_manage__select-role"
        >
          <option value="" disabled>Selecione</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Admin</option>
          <option value="customer">Cliente</option>
        </select>
      </label>

      <Button
        disabled={ errorValidation }
        data-testid="admin_manage__button-register"
      >
        Cadastrar
      </Button>
    </form>
  );
};

export default AdminForm;
