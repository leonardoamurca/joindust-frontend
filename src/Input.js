import React from 'react';

function Input({ placeholder, value, onChange }) {
  return <input value={value} onChange={onChange} placeholder={placeholder}></input>
}

Input.defaultProps = {
  value: "",
  placeholder: "",
  onChange: () => {},
}

export default Input;