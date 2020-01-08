import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('should fire onChange event when user types', () => {
    let value = '';
    const onChange = jest.fn(e => {
      value = e.target.value;
    });

    const { getByPlaceholderText, rerender } = render(
      <Input value={value} onChange={onChange} placeholder="placeholder" />
    );

    const input = getByPlaceholderText('placeholder');
    userEvent.type(input, 'hello world!');
    rerender(
      <Input value={value} onChange={onChange} placeholder="placeholder" />
    );

    expect(input.value).toEqual('hello world!');
  });
});
