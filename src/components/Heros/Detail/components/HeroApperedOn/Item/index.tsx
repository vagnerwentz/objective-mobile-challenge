import React from 'react';

import {
  ContentContainer,
  ImageApperedOn,
  ContainerText,
  Type,
} from './styles';

interface ItemProps {
  name: string;
  imageUri: string;
}

const ItemFlatList = ({ name, imageUri }: ItemProps) => {
  return (
    <ContentContainer>
      <ImageApperedOn source={{ uri: imageUri }} />
      <ContainerText>
        <Type>{name}</Type>
      </ContainerText>
    </ContentContainer>
  );
};

export { ItemFlatList };
