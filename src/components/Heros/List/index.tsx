import React, { useContext, useEffect } from 'react';
import { HeroContext } from '../../../hooks/context/heroContext';

import {
  HerosListHeader,
  HeaderContent,
} from './styles';

import { Content } from './Content';

const HeroList = () => {
  const { heroes, handleCallAPIToListHeroes } = useContext(HeroContext);

  useEffect(() => {
    handleCallAPIToListHeroes();
  }, []);

  return (
    <>
      <HerosListHeader>
        <HeaderContent>Nome</HeaderContent>
      </HerosListHeader>
      {heroes.map((hero => (
        <Content
          key={hero.id}
          data={hero}
        />
      )))}
    </>
  );
}

export { HeroList };
