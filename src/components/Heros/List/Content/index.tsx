import React from 'react';


import {
  ContentContainer,
  ThumbnailImage,
  HeroName,
  Line,
} from './styles';

const Content = () => {
  return (
    <>
      <ContentContainer>
        <ThumbnailImage />
        <HeroName>Tony Stark</HeroName>
      </ContentContainer>
      <Line />
    </>
  );
}

export { Content };
