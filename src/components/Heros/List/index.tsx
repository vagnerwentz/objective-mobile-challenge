import React from 'react';

import {
  HerosListHeader,
  HeaderContent,
} from './styles';

import { Content } from './Content';

const HeroList = () => {
  return (
    <>
      <HerosListHeader>
        <HeaderContent>Nome</HeaderContent>
      </HerosListHeader>
      <Content />
    </>
  );
}

export { HeroList } ;
