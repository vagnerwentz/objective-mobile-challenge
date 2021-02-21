import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { HeroContentProps } from '../interfaces/hero-protocols';

import {
  ContentContainer,
  ThumbnailImage,
  HeroName,
  Line,
} from './styles';

const Content = ({ data }: HeroContentProps) => {
  const navigation = useNavigation();

  return (
    <>
      <ContentContainer onPress={() => navigation.navigate('Detail', data)}>
        <ThumbnailImage
          source={{uri:
            `${data.thumbnail.path}/standard_medium.${data.thumbnail.extension}`
          }}
        />
        <HeroName>{data.name}</HeroName>
      </ContentContainer>
      <Line />
    </>
  );
}

export { Content };
