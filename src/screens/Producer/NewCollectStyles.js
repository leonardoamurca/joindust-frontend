import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* height: 300px; */
  padding-bottom: 50px;
  position: relative;
  margin-top: 40px;
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 80%;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputLabel = styled.span`
  font-size: 17px;
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
