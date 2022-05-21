import React from 'react';
import PropTypes from 'prop-types';
import style from './css/Input.module.css';

const Input = ({
  page, label, type, name, value, onChange, error, onBlur, dataTestId,
}) => {
  const testidError = page ? `${(page === 'login')
  && 'common_login__element-invalid-email'} ${(page === 'register')
  && 'common_register__element-invalid_register'}` : null;

  return (
    <div className={ `${style.input} ${style[name]}` }>
      <input
        data-testid={ dataTestId }
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        onChange={ onChange }
        onBlur={ onBlur }
        placeholder={ label }
      />
      {(error) && <p data-testid={ testidError }>{error}</p>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.function,
  error: PropTypes.string,
  onBlur: PropTypes.function,
}.isRequired;

export default Input;
