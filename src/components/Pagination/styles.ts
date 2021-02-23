import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface PageSelectionButtonProps {
  selected?: boolean;
}

export const PaginationContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 15%;
`;

export const PagesContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const PageSelection = styled.View<PageSelectionButtonProps>`
  border-radius: 8px;
  border: 1px #d20a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-left: 15px;
  margin-right: 15px;
  background-color: ${props => (props.selected === true ? '#D20A0A' : '#fff')};
`;

export const PageNumber = styled.Text<PageSelectionButtonProps>`
  font-size: 20px;
  color: ${props => (props.selected === true ? '#fff' : '#D20A0A')};
`;

export const ArrowButton = styled(TouchableOpacity)`
  margin-left: 30px;
  margin-right: 30px;
`;
