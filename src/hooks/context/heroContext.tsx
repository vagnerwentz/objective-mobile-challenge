import React, { createContext, useCallback, useEffect, useState } from 'react';

import { MARVEL_API } from '@env';

import { api } from '../../services/marvelApi';

import { HeroIndexProtocol } from '../../components/Heros/List/interfaces/hero-protocols';
interface HeroName {
  [key: string]: string;
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
  searchHero(searchName: HeroName): void;
}

export const HeroContext = createContext<HeroContextProps>(
  {} as HeroContextProps
);

interface SearchHeroProps {
  data: {
    results: Array<{
      name: string;
      thumbnail: {
        extension: string;
        path: string;
      }
    }>
  }
}

export const HeroProvider: React.FC = ({ children }) => {
  const [appearedType, setAppearedType] = useState<string>('');
  const [filteredHero, setFilteredHero] = useState<HeroIndexProtocol[]>([]);
  const [heroes, setHeroes] = useState<HeroIndexProtocol[]>([]);
  const [totalOfHeroes, setTotalOfHeroes] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [hero, setHero] = useState<HeroIndexProtocol>({} as HeroIndexProtocol);

  const handleViewTheHeroApparitions = (type: string = 'stories') => {
    setAppearedType(type);
  }

  async function handleCallAPIToListHeroes(offset: number = 0) {
    setLoading(true);
    const { data } = await api.get
      (`${MARVEL_API}/v1/public/characters?limit=5&offset=${offset}`)
    ;
    setLoading(false);
    setTotalOfHeroes(data.data.total);
    setHeroes(data.data.results);
  }

  async function handleCallAPIToListTheHeroDetail(heroId: number) {
    const { data } = await api.get(`${MARVEL_API}/v1/public/characters/${heroId}`);
    setHero(data);
  }

  const searchHero = useCallback(async ({ heroName }: HeroName) => {
    const results = heroes.filter(({ name }) =>
      name.includes(heroName),
    );
    setFilteredHero(results);
  }, []);

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
  )
};
