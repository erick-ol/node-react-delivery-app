import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, type, name, value, onChange, error, onBlur, dataTestId }) => (
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
    {(error) && <span data-testid="common_login__element-invalid-email">{error}</span>}
  </div>
);

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
