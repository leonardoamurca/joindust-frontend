import React from 'react';
import { Container } from './ContactCardStyles';
import { Card, Popconfirm, Icon } from 'antd';

function ContactCard({ id, corporateName, email, phone, onDelete }) {
  return (
    <Container>
      <Card
        title={corporateName}
        extra={
          <Popconfirm
            onConfirm={() => onDelete(id, corporateName)}
            title={`Tem certeza que deseja remover ${corporateName} ？`}
            icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
          >
            <a href="#">Deletar</a>
          </Popconfirm>
        }
      >
        <p>
          E-mail: <strong>{email}</strong>
        </p>
        <p>
          Telefone: <strong>{phone}</strong>
        </p>
      </Card>
    </Container>
  );
}
export default ContactCard;
