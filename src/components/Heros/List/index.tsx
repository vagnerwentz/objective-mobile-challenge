import React, { useContext, useEffect, useState } from 'react';
import { HeroContext } from '../../../hooks/context/heroContext';

import { ShimmerContentListHero } from '../../Shimmer/ShimmerContentListHero';

import {
  Container,
  HerosListHeader,
  HeaderContent,
} from './styles';

import { Content } from './Content';
import { Pagination } from '../../Pagination';

const HeroList = () => {
  const { filteredHero, handleCallAPIToListHeroes, totalOfHeroes, loading } = useContext(HeroContext);
  const [offset, setOffset] = useState<number>(0);
  const [_, setSelectedPage] = useState(0);

  useEffect(() => {
    handleCallAPIToListHeroes(offset);
  }, [offset]);

  const handlePress = (value: number) => {
    setOffset(value * 5);
    setSelectedPage(value)
  }

  return (
    <Container>
      <HerosListHeader>
        <HeaderContent>Nome</HeaderContent>
      </HerosListHeader>
      {loading ? (
        <>
          <ShimmerContentListHero />
          <ShimmerContentListHero />
          <ShimmerContentListHero />
          <ShimmerContentListHero />
          <ShimmerContentListHero />
        </>
      ) : (filteredHero.map((hero => (
        <Content
          key={hero.id}
          data={hero}
        />
      )))) }
      <Pagination
        pages={Math.round(totalOfHeroes / 5)}
        selectedPage={offset / 5}
        onPress={handlePress}
      />
    </Container>
  );
}

export { HeroList };
