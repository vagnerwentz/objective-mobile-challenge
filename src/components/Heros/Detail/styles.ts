import styled from 'styled-components/native';

const grayColor = '#4E4E4E';
const blackColor = '#000';

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 46px;
`;

export const HeroImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #000;
`;

export const HeroName = styled.Text`
  font-size: 22px;
  color: ${grayColor};
  font-family: 'Roboto-Black';
  padding-top: 20px;
`;

export const HeroDescription = styled.Text`
  font-size: 18px;
  color: ${blackColor};
  font-family: 'Roboto-Light';
  padding-left: 20px;
  padding-right: 20px;
  text-align: justify;
`;
