import React, { useState } from 'react';
import { Input, Icon, Button, Alert } from 'antd';

import useCallbackStatus from '../../utils/useCallbackStatus';
import { useUser } from '../../context/user';
import {
  FormContainer,
  Container,
  InputContainer,
  InputLabel,
  ButtonContainer,
} from './NewCollectStyles';

function NewCollect() {
  const producer = useUser();
  const {
    isPending,
    isRejected,
    isSuccess,
    error,
    run,
    response,
  } = useCallbackStatus();

  const [form, setForm] = useState({
    price: '',
    quantity: '',
    userId: producer.user.id,
  });

  const isSubmitable = form.price && form.quantity;

  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onCreateCollect = () => {
    isSubmitable && run(producer.createCollect(form));
  };

  return (
    <Container>
      <h1
        style={{
          color: '#2C2C2D',
          marginTop: '20px',
          fontWeight: 'bold',
          fontSize: '35px',
        }}
      >
        Cadastrar Coleta
      </h1>
      <FormContainer>
        <InputContainer>
          <InputLabel>Preço (em R$)</InputLabel>
          <Input
            size="large"
            name="price"
            placeholder="Exemplo: 222,00"
            onChange={onChange}
            value={form.price}
            type="number"
            prefix={<Icon type="dollar" />}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Quantidade (em quilogramas)</InputLabel>
          <Input
            size="large"
            name="quantity"
            placeholder="Exemplo: 534 "
            onChange={onChange}
            value={form.quantity}
            type="number"
            prefix={<Icon type="number" />}
            suffix={
              <span>
                <strong>kg</strong>
              </span>
            }
          />
        </InputContainer>
        <ButtonContainer>
          <Button
            disabled={!isSubmitable}
            style={{
              backgroundColor: isSubmitable ? '#2C2C2D' : '#e8e8e8',
            }}
            block
            size="large"
            loading={isPending}
            type="primary"
            onClick={onCreateCollect}
          >
            Cadastrar
          </Button>
        </ButtonContainer>
        {isRejected && (
          <Alert
            style={{ width: '80%' }}
            message={error && error.error}
            description={error && error.message}
            type="error"
            showIcon
          />
        )}
        {isSuccess && (
          <Alert
            style={{ width: '80%' }}
            message={response && response.message}
            type="success"
            showIcon
          />
        )}
      </FormContainer>
    </Container>
  );
}

export default NewCollect;
