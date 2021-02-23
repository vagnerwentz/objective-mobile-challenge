import React from 'react';

import { SearchHeader } from '../../components/SearchHeader';
import { HeroList } from '../../components/Heros/List';

const Home = () => {
  return (
    <>
      <SearchHeader />
      <HeroList />
    </>
  );
};

export { Home };
