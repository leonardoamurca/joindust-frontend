import React, { useState } from 'react';

import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../context/auth';
import useCallbackStatus from '../utils/useCallbackStatus';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { isPending, isRejected, error, run } = useCallbackStatus();

  const isSubmitable = email && password;

  const onTryLogin = () => {
    isSubmitable && run(login(email, password));
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
      {isPending && <div>Loading...</div>}
      {isRejected && (
        <div css={{ color: 'red' }}>{error ? error.message : null}</div>
      )}
    </div>
  );
}

export default Login;
