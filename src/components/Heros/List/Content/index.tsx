import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { HeroContentProps } from '../interfaces/hero-protocols';

import {
  ContentContainer,
  ThumbnailImage,
  HeroName,
  Line,
} from './styles';

const Content = ({ data: hero }: HeroContentProps) => {
  const navigation = useNavigation();

  return (
    <>
      <ContentContainer onPress={() => navigation.navigate('Detail', hero)}>
        <ThumbnailImage
          source={{uri:
            `${hero.thumbnail.path}/standard_medium.${hero.thumbnail.extension}`
          }}
        />
        <HeroName>{hero.name}</HeroName>
      </ContentContainer>
      <Line />
    </>
  );
}

export { Content };
