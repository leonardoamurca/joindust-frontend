import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, label, disabled, ...props }) {
  return (
    <button onClick={onClick} disabled={disabled} {...props}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
  label: '',
  disabled: false,
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
