import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <span style={ { color: '#f31', margin: '1rem 0 0', display: 'block' } }>{error}</span>
  );
};

Error.propTypes = {
  error: PropTypes.string,
}.isRequired;

export default Error;
