import React from 'react';
import '@testing-library/jest-dom/extend-expect';
//import userEvent from "@testing-library/user-event";
import { render } from '@testing-library/react';
import Login from './Login';
import userEvent from '@testing-library/user-event';

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

  it('should only submit when clicks on Login button and all inputs are filled', () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(<Login />);

    const loginButton = getByText(/entrar/i);
    const isLoadingLabel = getByTestId(/loading/i);
    const emailField = getByPlaceholderText(/e-mail/i);
    const passwordField = getByPlaceholderText(/senha/i);

    // All fields empty
    userEvent.click(loginButton);

    expect(isLoadingLabel.textContent).toBe('');

    // All fields filled
    userEvent.type(emailField, 'leo');
    userEvent.type(passwordField, '123');
    userEvent.click(loginButton);

    expect(isLoadingLabel.textContent).toBe('Loading...');

    userEvent.type(emailField, '', { allAtOnce: true });
    userEvent.type(passwordField, '', { allAtOnce: true });

    // Only Email field filled
    userEvent.type(emailField, 'leo@gmail.com');
    userEvent.click(loginButton);

    expect(isLoadingLabel.textContent).toBe('');

    userEvent.type(emailField, '', { allAtOnce: true });
    userEvent.type(passwordField, '', { allAtOnce: true });

    // Only Password field filled
    userEvent.type(passwordField, '123');
    userEvent.click(loginButton);

    expect(isLoadingLabel.textContent).toBe('');
  });
});
