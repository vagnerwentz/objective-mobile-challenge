import styled from 'styled-components/native';

const redDefault = '#D42026';

export const Container = styled.View`
  display: flex;
  margin: 12px 42px 0px 42px;
  justify-content: center;
`;

export const ContainerTitle = styled.Text`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
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

export const ContainerSearch = styled.Text`
`;

export const LabelSearchBar = styled.Text`
  color: ${redDefault};
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const SearchBar = styled.TextInput`
  border: 1px solid #A5A5A5;
  padding: 0;
  margin: 0;
  padding-left: 6px;
  border-radius: 5px;
  min-height: 40px;
  margin-top: 6px;
`;
