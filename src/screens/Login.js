import React, { useState } from 'react';
import { Input, Icon, Button } from 'antd';

import { useAuth } from '../context/auth';
import useCallbackStatus from '../utils/useCallbackStatus';

import { Container, FormContainer } from './LoginStyles';
import Logo from '../components/Logo';

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
    <Container>
      <Logo type="full-mobile" />
      <FormContainer>
        <Input
          size="large"
          placeholder="Digite seu e-mail"
          onChange={e => setEmail(e.target.value)}
          value={email}
          type="email"
          prefix={<Icon type="mail" />}
        />

        <Input.Password
          size="large"
          placeholder="Digite sua senha"
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
          prefix={<Icon type="lock" />}
          onPressEnter={onTryLogin}
        />
        <Button
          disabled={!isSubmitable}
          style={{
            backgroundColor: isSubmitable ? '#2C2C2D' : '#e8e8e8',
          }}
          block
          size="large"
          loading={isPending}
          type="primary"
          onClick={onTryLogin}
        >
          Entrar
        </Button>

        <div>
          Não possui conta? <a href="/register">Cadastre-se</a> agora!
        </div>

        {isRejected && (
          <div
            style={{
              color: 'red',
              position: 'absolute',
              bottom: '15px',
              fontSize: '17px',
            }}
          >
            {error ? error.message : null}
          </div>
        )}
      </FormContainer>
    </Container>
  );
}

export default Login;
