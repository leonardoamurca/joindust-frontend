import React, { useState } from 'react';

import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../context/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

  const isSubmitable = email && password;

  const onTryLogin = () => {
    isSubmitable && auth.login(email, password);
  };

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
      <Button onClick={onTryLogin} label="Entrar" />
      {auth.error && <div>{auth.error.message}</div>}
    </div>
  );
}

export default Login;
