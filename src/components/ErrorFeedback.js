import React from 'react';
import { Container, Title, MessageList, Message } from './ErrorFeedbackStyles';

function ErrorFeedback({ message, errorType, errors }) {
  return (
    <Container>
      <Title>{errorType}</Title>
      {errors && (
        <MessageList>
          {errors.map((error, index) => (
            <Message key={index}>
              <strong>{error.field} </strong>
              {error.defaultMessage}
            </Message>
          ))}
        </MessageList>
      )}

      {message && <Message>{message}</Message>}
    </Container>
  );
}

export default ErrorFeedback;
