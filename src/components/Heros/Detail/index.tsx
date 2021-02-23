import React from 'react';

import { HeroDetail } from '../List/interfaces/hero-protocols';

import { HeroApperances } from './components/HeroApperances';
import { HeroApperedOn } from './components/HeroApperedOn';

import {
  HeaderContainer,
  HeroImage,
  HeroName,
  HeroDescription,
} from './styles';

const Detail = (heroParams: HeroDetail) => {
  const {
    route: { params: hero },
  } = heroParams;

  return (
    <>
      <HeaderContainer>
        <HeroImage
          source={{
            uri: `${hero.thumbnail.path}/standard_medium.${hero.thumbnail.extension}`,
          }}
        />
        <HeroName>{hero.name}</HeroName>
        <HeroDescription>
          {hero.description ? hero.description : 'Sem descrição'}
        </HeroDescription>

        <HeroApperances
          stories={hero.stories.available}
          comics={hero.comics.available}
          events={hero.events.available}
          series={hero.series.available}
        />
      </HeaderContainer>
      <HeroApperedOn id={hero.id} />
    </>
  );
};

export { Detail };
