import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 40px;
`;

export const InputContainer = styled.div`
  width: 80%;
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputLabel = styled.span`
  font-size: 13px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 62px;
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
