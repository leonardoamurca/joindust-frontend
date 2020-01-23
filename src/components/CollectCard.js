import React from 'react';
import { Card, Button } from 'antd';
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
        <Quantity>{quantity} litros</Quantity>
        <Price>R${price},00</Price>
        <ButtonContainer>
          <Button onClick={() => onDelete(id)} type="danger">
            Excluir
          </Button>
        </ButtonContainer>
      </Card>
    </Container>
  );
}

export default CollectCard;
