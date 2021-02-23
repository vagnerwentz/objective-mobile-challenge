import React, { useContext, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

import { HeroContext, HeroName } from '../../hooks/context/heroContext';

import {
  Container,
  ContainerTitle,
  ContainerBorder,
  SearchText,
  MarvelText,
  RoleTechnicalTest,
  ContainerSearch,
  LabelSearchBar,
  SearchBar,
} from './styles';

const SearchHeader = () => {
  const { searchHero } = useContext(HeroContext);
  const [isFocused, setIsFocused] = useState(false);
  const [heroName, setHeroName] = useState<string>('');

  useEffect(() => {
    searchHero({ name: '' });
  }, [searchHero]);

  const debounceSearchHeroByName = useMemo(
    () => debounce(name => searchHero(name), 250),
    [searchHero],
  );

  const handleSearchHeroByName = (letter: string) => {
    setHeroName(letter);
    const hero = { name: letter } as HeroName;
    debounceSearchHeroByName(hero);
  };

  return (
    <Container>
      <ContainerTitle>
        <ContainerBorder>
          <SearchText>BUSCA </SearchText>
        </ContainerBorder>
        <MarvelText>MARVEL </MarvelText>
        <RoleTechnicalTest>TESTE MOBILE</RoleTechnicalTest>
      </ContainerTitle>
      <ContainerSearch>
        <LabelSearchBar>Nome do Personagem</LabelSearchBar>
      </ContainerSearch>

      <SearchBar
        placeholder="Encontre seu personagem favorito rapidinho!"
        onChangeText={text => handleSearchHeroByName(text)}
        value={heroName}
        onFocus={() => setIsFocused(true)}
        isFocused={isFocused}
        onBlur={() => setIsFocused(false)}
      />
    </Container>
  );
};

export { SearchHeader };
