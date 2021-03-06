import React from 'react';

const types = {
  name: {
    regex: /^[A-Za-z0-9\u00C0-\u00FF\s$&+,:;=?@#|'<>.^*()%!-]{12,}$/,
    message: 'Nome menor que 12 caracteres.',
  },
  email: {
    regex: /\S+@\S+\.\S+/,
    // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'E-mail inválido.',
  },
  password: {
    regex: /^[A-Za-z0-9\s$&+,_:;=?@#|'<>.^*()%!-]{6,}$/,
    message: 'Senha menor que 6 caracteres.',
  },
  number: { regex: /^\d+$/, message: 'Apenas números.' },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  const validate = (text) => {
    if (type === false) return true;
    if (text.length === 0) {
      setError('Campo vazio.');
      return false;
    }
    if (types[type] && !types[type].regex.test(text)) {
      setError(types[type].message);
      return false;
    }
    setError(null);
    return true;
  };

  const onChange = ({ target }) => {
    validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
