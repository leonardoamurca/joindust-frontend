import React from 'react';
import PropTypes from 'prop-types';

function Input({ placeholder, value, onChange }) {
  return <input value={value} onChange={onChange} placeholder={placeholder} />
}

Input.defaultProps = {
  value: "",
  placeholder: "",
  onChange: () => {},
}

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

export default Input;