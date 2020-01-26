import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

export const CorporateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CorporateName = styled.span`
  color: #2c2c2d;
  font-size: 25px;
  font-weight: bold;
`;

export const CorporateRole = styled.span`
  color: #515151;
  font-size: 17px;
  font-style: italic;
`;

export const CollectsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CollectsNumber = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export const CollectsLabel = styled.span`
  font-size: 15px;
  font-style: italic;
`;

export const DataContainer = styled.div`
  width: 80%;
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
