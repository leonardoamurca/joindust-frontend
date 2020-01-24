import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: ${props => props.isCentralized && 'center'};
  width: 100%;
`;
