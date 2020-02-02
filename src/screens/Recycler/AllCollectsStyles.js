import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CorporateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CorporateName = styled.span`
  color: #2c2c2d;
  font-size: 20px;
  font-weight: bold;
`;

export const DataContainer = styled.div`
  width: 90%;
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const DataItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 7px;
  border-bottom: 1px solid black;
`;

export const DataLabel = styled.span`
  font-size: 17px;
  font-style: bold;
`;

export const Data = styled.span`
  font-size: 17px;
`;
