import React, { useState } from 'react';
import {
  Container,
  InputContainer,
  InputLabel,
  ButtonContainer,
} from './RegisterStyles';
import { Input, Select, Button } from 'antd';
import { ROLES } from '../utils/constants';
import { useAuth } from '../context/auth';
import useCallbackStatus from '../utils/useCallbackStatus';

const { Option } = Select;

function Register() {
  const { register } = useAuth();
  const {
    isPending,
    isRejected,
    isSuccess,
    error,
    run,
    response,
  } = useCallbackStatus();

  const [form, setForm] = useState({
    corporateName: '',
    username: '',
    email: '',
    password: '',
    cnpj: '',
    phone: '',
    roleId: 1,
  });

  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onChangeSelect = value => {
    setForm(prev => ({ ...prev, roleId: value }));
  };

  const onTryRegister = () => {
    run(register(form));
  };

  return (
    <Container>
      {/*TODO: Put real Register logo instead of the h1 below*/}
      <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>REGISTER LOGO</h1>
      <InputContainer>
        <InputLabel>Nome da empresa</InputLabel>
        <Input
          value={form.corporateName}
          name="corporateName"
          onChange={onChange}
          size="large"
          placeholder="Digite o nome da sua empresa"
        />
      </InputContainer>

      <InputContainer>
        <InputLabel>E-mail</InputLabel>
        <Input
          value={form.email}
          name="email"
          onChange={onChange}
          size="large"
          placeholder="Digite seu e-mail"
        />
      </InputContainer>

      <InputContainer>
        <InputLabel>Nome de usuário</InputLabel>
        <Input
          value={form.username}
          name="username"
          onChange={onChange}
          size="large"
          placeholder="Digite um nome para seu usuário "
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Senha</InputLabel>
        <Input.Password
          value={form.password}
          name="password"
          onChange={onChange}
          size="large"
          placeholder="Digite sua senha"
          type="password"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>CNPJ</InputLabel>
        <Input
          value={form.cnpj}
          name="cnpj"
          onChange={onChange}
          maxLength={14}
          size="large"
          placeholder="Ex: 12345678987654"
        />
      </InputContainer>

      <InputContainer>
        <InputLabel>Telefone</InputLabel>
        <Input
          value={form.phone}
          name="phone"
          onChange={onChange}
          size="large"
          maxLength={9}
          placeholder="Ex: 994736281"
        />
      </InputContainer>

      <InputContainer>
        <InputLabel>Tipo de usuário</InputLabel>
        <Select
          size="large"
          id="roleId"
          value={form.roleId}
          onChange={onChangeSelect}
        >
          {ROLES.map(role => (
            <Option key={role.id} value={role.id}>
              {role.name}
            </Option>
          ))}
        </Select>
      </InputContainer>
      <ButtonContainer>
        <Button
          block
          size="large"
          loading={isPending}
          type="primary"
          onClick={onTryRegister}
        >
          Cadastrar
        </Button>
      </ButtonContainer>
      {isRejected && (
        <div
          style={{
            color: 'red',
            bottom: '15px',
            fontSize: '17px',
            width: '80%',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          {error && error.message}
        </div>
      )}

      {isSuccess && (
        <div
          style={{
            color: 'red',
            bottom: '15px',
            fontSize: '17px',
            width: '80%',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          {response && response.message}
        </div>
      )}
    </Container>
  );
}

export default Register;
