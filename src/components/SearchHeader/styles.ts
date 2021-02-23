import styled from 'styled-components/native';

const redDefault = '#D42026';

interface InputStyleProps {
  isFocused: boolean;
}

export const Container = styled.View`
  margin: 12px 42px 0px 42px;
  justify-content: center;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const ContainerBorder = styled.View`
  align-items: center;
  justify-content: center;
  border-color: ${redDefault};
  padding-top: 1px;
  border-bottom-width: 2px;
`;

export const SearchText = styled.Text`
  color: ${redDefault};
  font-size: 16px;
  font-family: 'Roboto-Black';
`;

export const MarvelText = styled.Text`
  color: ${redDefault};
  font-size: 16px;
  font-family: 'Roboto-Black';
`;

export const RoleTechnicalTest = styled.Text`
  color: ${redDefault};
  font-size: 16px;
  font-family: 'Roboto-Light';
`;

export const ContainerSearch = styled.View``;

export const LabelSearchBar = styled.Text`
  color: ${redDefault};
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const SearchBar = styled.TextInput<InputStyleProps>`
  border: 1px solid #a5a5a5;
  padding: 0;
  margin: 0;
  padding-left: 6px;
  border-radius: 5px;
  min-height: 40px;
  margin-top: 6px;
  border-color: ${props => (props.isFocused ? '#D42026' : '#A5A5A5')};
`;
