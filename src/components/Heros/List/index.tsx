import React, { useEffect, useState } from 'react';

import { api } from '../../../services/marvelApi';

import { HeroIndexProtocol  } from './interfaces/hero-protocols';

import {
  HerosListHeader,
  HeaderContent,
} from './styles';

import { Content } from './Content';

import { MARVEL_API } from '@env';

const HeroList = () => {
  const [heroes, setHeroes] = useState<HeroIndexProtocol[]>([]);

  useEffect(() => {
    api.get(`${MARVEL_API}/v1/public/characters?limit=5`).then((
      response => setHeroes(response.data.data.results)
    ));
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
