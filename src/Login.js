import React from 'react';
import Input from './Input';

function Login() {
  return (
    <div>
      <Input placeholder="e-mail" value=""/>
      <Input placeholder="senha" value="" />
    </div>
  );
}

export default Login;