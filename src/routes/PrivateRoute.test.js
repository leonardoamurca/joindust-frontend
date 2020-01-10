import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import isAuthenticated from './isAuthenticated';
import Routes from './Routes';

describe('Routes', () => {
  it('should render Home Screen if user is authenticated', () => {
    const isAuth = jest.fn(isAuthenticated);
    const { getByText } = render(<Routes />);
    const homeScreen = isAuth() && getByText(/home/i);

    if (isAuth()) {
      expect(homeScreen.textContent).toMatch('Home');
    }
  });

  it('should render Login Screen if user is not authenticated', () => {
    const isAuth = jest.fn(isAuthenticated);
    const { getByText } = render(<Routes />);
    const homeScreen = !isAuth() && getByText(/entrar/i);

    if (isAuth()) {
      expect(homeScreen.textContent).toMatch('Entrar');
    }
  });
});
