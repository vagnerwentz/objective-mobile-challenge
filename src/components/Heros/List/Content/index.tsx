import React from 'react';

import { HeroContentProps } from '../interfaces/hero-protocols';

import {
  ContentContainer,
  ThumbnailImage,
  HeroName,
  Line,
} from './styles';

const Content = ({ name, thumbnailURL }: HeroContentProps) => {
  return (
    <>
      <ContentContainer>
        <ThumbnailImage
          source={thumbnailURL}
        />
        <HeroName>{name}</HeroName>
      </ContentContainer>
      <Line />
    </>
  );
}

export { Content };
