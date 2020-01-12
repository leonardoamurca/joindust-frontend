import React, { useState } from 'react';
import { Input, Icon, Button } from 'antd';

import { useAuth } from '../context/auth';
import useCallbackStatus from '../utils/useCallbackStatus';

function Login() {
  const { login } = useAuth();
  const { isPending, isRejected, error, run } = useCallbackStatus();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isSubmitable = email && password;

  const onTryLogin = () => {
    isSubmitable && run(login(email, password));
  };

  return (
    <div>
      <Input
        placeholder="Digite seu e-mail"
        onChange={e => setEmail(e.target.value)}
        value={email}
        type="email"
        prefix={<Icon type="mail" />}
      />

      <Input.Password
        placeholder="Digite sua senha"
        onChange={e => setPassword(e.target.value)}
        value={password}
        type="password"
        prefix={<Icon type="lock" />}
      />

      <Button loading={isPending} type="primary" onClick={onTryLogin}>
        Entrar
      </Button>
      {isRejected && (
        <div css={{ color: 'red' }}>{error ? error.message : null}</div>
      )}
    </div>
  );
}

export default Login;
