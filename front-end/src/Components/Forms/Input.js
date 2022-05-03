import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  page, label, type, name, value, onChange, error, onBlur, dataTestId,
}) => {
  const testidError = page ? `${(page === 'login')
  && 'common_login__element-invalid-email'} ${(page === 'register')
  && 'common_register__element-invalid_register'}` : null;

  return (
    <div>
      <label htmlFor={ name }>
        {label}
      </label>
      <input
        data-testid={ dataTestId }
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        onChange={ onChange }
        onBlur={ onBlur }
      />
      {(error) && <span data-testid={ testidError }>{error}</span>}
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
