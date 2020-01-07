import React, { useState } from 'react';
import Input from './Input';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Input
        onChange={e => setEmail(e.target.value)}
        placeholder="e-mail"
        value={email}
        type="email"
      />
      <Input
        onChange={e => setPassword(e.target.value)}
        placeholder="senha"
        value={password}
        type="password"
      />
    </div>
  );
}

export default Login;
