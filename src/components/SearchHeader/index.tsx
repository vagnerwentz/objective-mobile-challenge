import React, { useContext, useEffect, useState } from 'react';

import { HeroContext } from '../../hooks/context/heroContext';

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
  const { searchHero } = useContext(HeroContext);
  const [heroName, setHeroName] = useState<string>('');

  useEffect(() => {
    searchHero({ heroName });
  }, [heroName, searchHero]);

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

      <SearchBar
        placeholder='Encontre seu personagem favorito rapidinho!'
        onChangeText={(text) => setHeroName(text)}
        value={heroName}
      />
    </Container>
  );
}

export { SearchHeader };
