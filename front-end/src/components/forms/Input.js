import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => (
  <div className={ styles.wrapper }>
    <label htmlFor={ name } className={ styles.label }>
      {label}
    </label>
    <input
      className={ styles.input }
      type={ type }
      id={ name }
      name={ name }
      value={ value }
      onChange={ onChange }
      onBlur={ onBlur }
    />
    {error && <p className={ styles.error }>{error}</p>}
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
