import React, { useState } from 'react';

import Input from '../components/Input';
import Button from '../components/Button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onTryLogin = () => {
    if (email && password) {
      setLoading(true);
    } else {
      setLoading(false);
    }
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
      <span data-testid="loading">{isLoading ? 'Loading...' : ''}</span>
      <Button onClick={onTryLogin} label="Entrar" />
    </div>
  );
}

export default Login;
