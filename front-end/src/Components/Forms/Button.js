import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => (
  <button { ...props } type="submit">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
