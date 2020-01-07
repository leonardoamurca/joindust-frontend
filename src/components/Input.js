import React from 'react';
import PropTypes from 'prop-types';

function Input({ placeholder, value, onChange, type }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}

Input.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {},
  type: 'text',
};

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default Input;
