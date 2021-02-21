import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

const grayColor = '#4E4E4E';
const roseColor = '#F6D2D3';

export const ContentContainer = styled(RectButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 18px;
`;

export const ThumbnailImage = styled.Image`
  background-color: ${grayColor};
  margin-left: 42px;
  height: 56px;
  width: 56px;
  border-radius: 28px;
`;

export const HeroName = styled.Text`
  padding-left: 20px;
  font-size: 21px;
  font-family: 'Roboto-Regular';
  color: ${grayColor};
`;

export const Line = styled.View`
  border-bottom-width: 2px;
  margin-top: 18px;
  border-color: ${roseColor};
`;

