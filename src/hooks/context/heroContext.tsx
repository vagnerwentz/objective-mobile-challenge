import React, { createContext, useCallback, useState } from 'react';

import { MARVEL_API } from '@env';

import { api } from '../../services/marvelApi';

import { HeroIndexProtocol } from '../../components/Heros/List/interfaces/hero-protocols';

export interface HeroName {
  name: string;
}

interface HeroContextProps {
  appearedType: string;
  hero: HeroIndexProtocol;
  heroes: HeroIndexProtocol[];
  totalOfHeroes: number;
  filteredHero: HeroIndexProtocol[];
  loading: boolean;
  handleCallAPIToListHeroes(offset: number): Promise<void>;
  handleCallAPIToListTheHeroDetail(heroId: number): Promise<void>;
  handleViewTheHeroApparitions(type: string): void;
  searchHero(name: HeroName): void;
}

export const HeroContext = createContext<HeroContextProps>(
  {} as HeroContextProps,
);

export const HeroProvider: React.FC = ({ children }) => {
  const [appearedType, setAppearedType] = useState<string>('');
  const [filteredHero, setFilteredHero] = useState<HeroIndexProtocol[]>([]);
  const [heroes, setHeroes] = useState<HeroIndexProtocol[]>([]);
  const [totalOfHeroes, setTotalOfHeroes] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [hero, setHero] = useState<HeroIndexProtocol>({} as HeroIndexProtocol);
  const [initialHeroes, setInitalHeroes] = useState<HeroIndexProtocol[]>([]);

  const handleViewTheHeroApparitions = (type = 'stories') => {
    setAppearedType(type);
  };

  async function handleCallAPIToListHeroes(offset = 0) {
    setLoading(true);
    const response = await api.get(
      `${MARVEL_API}/v1/public/characters?limit=5&offset=${offset}`,
    );

    setInitalHeroes(response.data.data.results);
    setHeroes(response.data.data.results);
    setTotalOfHeroes(response.data.data.total);
    setLoading(false);
  }

  async function handleCallAPIToListTheHeroDetail(heroId: number) {
    const response = await api.get(
      `${MARVEL_API}/v1/public/characters/${heroId}`,
    );
    setHero(response.data);
  }

  const searchHero = useCallback(
    async ({ name }: HeroName) => {
      if (!name) {
        setHeroes(initialHeroes);
        setFilteredHero(initialHeroes);
        return;
      }
      const response = await api.get(
        `${MARVEL_API}/v1/public/characters?nameStartsWith=${name}&limit=5`,
      );
      setFilteredHero(response.data.data.results);
    },
    [initialHeroes],
  );

  return (
    <HeroContext.Provider
      value={{
        hero,
        heroes,
        loading,
        searchHero,
        filteredHero,
        appearedType,
        totalOfHeroes,
        handleCallAPIToListHeroes,
        handleViewTheHeroApparitions,
        handleCallAPIToListTheHeroDetail,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};
