import React, { createContext, useEffect, useState } from 'react';

import { MARVEL_API } from '@env';

import { api } from '../../services/marvelApi';

import { HeroIndexProtocol } from '../../components/Heros/List/interfaces/hero-protocols';

interface HeroContextProps {
  appearedType: string;
  hero: HeroIndexProtocol;
  heroes: HeroIndexProtocol[];
  handleCallAPIToListHeroes(): Promise<void>;
  handleCallAPIToListTheHeroDetail(heroId: number): Promise<void>;
  handleViewTheHeroApparitions(type: string): void;
}

export const HeroContext = createContext<HeroContextProps>(
  {} as HeroContextProps
);

export const HeroProvider: React.FC = ({ children }) => {
  const [appearedType, setAppearedType] = useState<string>('');
  const [heroes, setHeroes] = useState<HeroIndexProtocol[]>([]);
  const [hero, setHero] = useState<HeroIndexProtocol>({} as HeroIndexProtocol);

  const handleViewTheHeroApparitions = (type: string) => {
    setAppearedType(type);
  }

  async function handleCallAPIToListHeroes() {
    const { data } = await api.get(`${MARVEL_API}/v1/public/characters?limit=5`);
    setHeroes(data.data.results);
  }

  async function handleCallAPIToListTheHeroDetail(heroId: number) {
    const { data } = await api.get(`${MARVEL_API}/v1/public/characters/${heroId}`);
    setHero(data);
  }

  return (
    <HeroContext.Provider
      value={{
        hero,
        heroes,
        appearedType,
        handleCallAPIToListHeroes,
        handleViewTheHeroApparitions,
        handleCallAPIToListTheHeroDetail,
      }}
    >
      {children}
    </HeroContext.Provider>
  )
};
