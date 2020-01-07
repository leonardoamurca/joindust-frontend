import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should fire onClick event when user clicks', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button label="Click me!" onClick={onClick} />
    );
    const button = getByText('Click me!');

    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
