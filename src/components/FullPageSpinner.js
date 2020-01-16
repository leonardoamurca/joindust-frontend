import React from 'react';
import { Container } from './FullPageSpinnerStyles';
import { Spin } from 'antd';

function FullPageSpinner() {
  return (
    <Container>
      <Spin size="large" />
    </Container>
  );
}

export default FullPageSpinner;
