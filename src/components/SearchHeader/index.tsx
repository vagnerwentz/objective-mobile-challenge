import React from 'react';

import {
  Container,
  ContainerTitle,
  SearchText,
  MarvelText,
  RoleTechnicalTest,
  ContainerSearch,
  LabelSearchBar,
  SearchBar
} from './styles';

const SearchHeader = () => {
  return (
    <Container>
      <ContainerTitle>
        <SearchText>BUSCA</SearchText>
        <MarvelText>MARVEL</MarvelText>
        <RoleTechnicalTest>TESTE MOBILE</RoleTechnicalTest>
      </ContainerTitle>
      <ContainerSearch>
        <LabelSearchBar>
          Nome do Personagem
        </LabelSearchBar>
      </ContainerSearch>

      <SearchBar />
    </Container>
  );
}

export { SearchHeader };
