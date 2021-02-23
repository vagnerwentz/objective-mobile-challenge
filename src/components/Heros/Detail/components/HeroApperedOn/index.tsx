import React, { useEffect, useContext, useState } from 'react';
import { FlatList } from 'react-native';
import { HeroContext } from '../../../../../hooks/context/heroContext';

import { HeroItemApperedOn } from '../interfaces/hero-detail-protocols';

import { api } from '../../../../../services/marvelApi';

import { ItemFlatList } from './Item';

import {
  ApperedOnContainer,
  Title,
} from './styles';

import { MARVEL_API } from '@env';

interface AppearedListProps {
  results: Array<{
    id: string;
    title: string;
    thumbnail: {
      extension: string;
      path: string;
    }
  }>
}

const HeroApperedOn = ({ id }: HeroItemApperedOn) => {
  const { appearedType } = useContext(HeroContext);
  const [appearedData, setAppearedData] = useState<AppearedListProps>({} as AppearedListProps);
  const type = appearedType === "" ? 'stories' : appearedType;

  useEffect(() => {
    api.get(`${MARVEL_API}/v1/public/characters/${id}/${type}`).then((response) =>
    setAppearedData(response.data.data)
  ).catch((err) => console.log(err))}, [appearedType]);

  return (
    <>
      <ApperedOnContainer>
        <Title>Vamos ver onde este herói apareceu</Title>
        <FlatList
          extraData
          data={appearedData.results}
          renderItem={(data) => <ItemFlatList
            name={data.item.title}
            imageUri={
              data.item.thumbnail ?
              `${data.item.thumbnail.path}/portrait_uncanny.${data.item.thumbnail.extension}`
              : 'http://www.freeiconspng.com/img/23541'
            }
          />}
          keyExtractor={item => `${item.id}`}
        />

      </ApperedOnContainer>
    </>
  );
}

export { HeroApperedOn };
