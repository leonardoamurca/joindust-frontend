import React from 'react';
import '@testing-library/jest-dom/extend-expect';
//import userEvent from "@testing-library/user-event";
import { render } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  it('should have 2 fields with value props', () => {
    const { getByPlaceholderText } = render(<Login />);
    const inputEmail = getByPlaceholderText(/e-mail/i);
    const inputPassword = getByPlaceholderText(/senha/i);

    expect(inputEmail).toHaveAttribute('value', '');
    expect(inputPassword).toHaveAttribute('value', '');
  });

  it('should have 1 e-mail field', () => {
    const { getByPlaceholderText } = render(<Login />);
    const input = getByPlaceholderText(/e-mail/i);

    expect(input).toHaveAttribute('type', 'email');
  });

  it('should have 1 password field', () => {
    const { getByPlaceholderText } = render(<Login />);
    const input = getByPlaceholderText(/senha/i);

    expect(input).toHaveAttribute('type', 'password');
  });
});
