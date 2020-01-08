import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Login from './Login';
import userEvent from '@testing-library/user-event';

describe('Login', () => {
  it('should have 2 fields with value props', () => {
    const { getByPlaceholderText } = setup();
    const inputEmail = getByPlaceholderText(/e-mail/i);
    const inputPassword = getByPlaceholderText(/senha/i);

    expect(inputEmail).toHaveAttribute('value', '');
    expect(inputPassword).toHaveAttribute('value', '');
  });

  it('should have 1 e-mail field', () => {
    const { getByPlaceholderText } = setup();
    const input = getByPlaceholderText(/e-mail/i);

    expect(input).toHaveAttribute('type', 'email');
  });

  it('should have 1 password field', () => {
    const { getByPlaceholderText } = setup();
    const input = getByPlaceholderText(/senha/i);

    expect(input).toHaveAttribute('type', 'password');
  });

  it('should only submit when clicks on Login button and all inputs are filled', () => {
    const { getByText, getByTestId, getByPlaceholderText } = setup();

    const loginButton = getByText(/entrar/i);
    const isLoadingLabel = getByTestId(/loading/i);
    const emailField = getByPlaceholderText(/e-mail/i);
    const passwordField = getByPlaceholderText(/senha/i);

    assertFromEmptyFields();
    expect(isLoadingLabel.textContent).toBe('');

    assertFromAllFieldsFilled();
    expect(isLoadingLabel.textContent).toBe('Loading...');

    resetFields();

    assertFromOnlyEmailFieldFilled();
    expect(isLoadingLabel.textContent).toBe('');

    resetFields();

    assertFromOnlyPasswordFieldFilled();
    expect(isLoadingLabel.textContent).toBe('');

    function assertFromEmptyFields() {
      userEvent.click(loginButton);
    }

    function assertFromAllFieldsFilled() {
      userEvent.type(emailField, 'leo');
      userEvent.type(passwordField, '123');
      userEvent.click(loginButton);
    }

    function assertFromOnlyEmailFieldFilled() {
      userEvent.type(emailField, 'leo@gmail.com');
      userEvent.click(loginButton);
    }

    function assertFromOnlyPasswordFieldFilled() {
      userEvent.type(passwordField, '123');
      userEvent.click(loginButton);
    }

    function resetFields() {
      userEvent.type(emailField, '', { allAtOnce: true });
      userEvent.type(passwordField, '', { allAtOnce: true });
    }
  });

  function setup() {
    const {
      getByPlaceholderText,
      getByText,
      queryByText,
      getByTestId,
      rerender,
    } = render(<Login />);

    return {
      getByPlaceholderText,
      getByText,
      queryByText,
      getByTestId,
      rerender,
    };
  }
});
