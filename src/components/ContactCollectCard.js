import React from 'react';
import { Card, Button } from 'antd';
import {
  Container,
  Quantity,
  Price,
  ButtonContainer,
} from './ContactCollectCardStyles';

function ContactCollectCard({ id, quantity, price, user, showProducer }) {
  return (
    <Container>
      <Card>
        <h1>#{id}</h1>
        <Quantity>{quantity} kg</Quantity>
        <Price>R${price}</Price>
        <ButtonContainer>
          <Button
            style={{
              backgroundColor: '#2C2C2D',
            }}
            onClick={() => showProducer(user)}
            type="primary"
          >
            Ver detalhes
          </Button>
        </ButtonContainer>
      </Card>
    </Container>
  );
}

export default ContactCollectCard;
