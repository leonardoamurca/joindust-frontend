import React from 'react';
import { Card, Button, Popconfirm } from 'antd';
import {
  Container,
  Quantity,
  Price,
  ButtonContainer,
} from './CollectCardStyles';

function CollectCard({ id, quantity, price, onDelete }) {
  return (
    <Container>
      <Card>
        <h1>#{id}</h1>
        <Quantity>{quantity} kg</Quantity>
        <Price>R${price}</Price>
        <ButtonContainer>
          <Button type="danger">
            <Popconfirm
              title={`Tem certeza que deseja excluir a coleta ${id} ?`}
              onConfirm={() => onDelete(id)}
              okText="Sim"
              cancelText="Não"
            >
              <a>Excluir</a>
            </Popconfirm>
          </Button>
        </ButtonContainer>
      </Card>
    </Container>
  );
}

export default CollectCard;
