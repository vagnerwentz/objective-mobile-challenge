import styled from 'styled-components/native';

const redDefault = '#D42026';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const HerosListHeader = styled.View`
  background-color: ${redDefault};
  margin-top: 12px;
  min-height: 40px;
  display: flex;
  justify-content: center;
`;

export const HeaderContent = styled.Text`
  color: #fff;
  margin-left: 100px;
  font-family: 'Roboto-Regular';
  font-size: 16px;
`;
