import React, { useContext } from 'react';
import { HeroContext } from '../../../../../hooks/context/heroContext';

import { HeroDetailAppearanceProps } from '../interfaces/hero-detail-protocols';

import {
  BadgeContent,
  Badge,
  BadgeDescription,
  BadgeViewValue,
  BadgeValue,
} from './styles';

enum ButtonTypeValue {
  STORIES = 'stories',
  SERIES = 'series',
  EVENTS = 'events',
  COMICS = 'comics',
}

const HeroApperances = ({
  stories,
  comics,
  events,
  series,
}: HeroDetailAppearanceProps) => {
  const { handleViewTheHeroApparitions } = useContext(HeroContext);

  return (
    <>
      <BadgeContent horizontal showsHorizontalScrollIndicator={false}>
        {stories !== 0 && (
          <Badge
            type="stories"
            onPress={() =>
              handleViewTheHeroApparitions(ButtonTypeValue.STORIES)}
          >
            <BadgeDescription>Estórias</BadgeDescription>
            <BadgeViewValue type="stories">
              <BadgeValue>{stories}</BadgeValue>
            </BadgeViewValue>
          </Badge>
        )}

        {series !== 0 && (
          <Badge
            type="series"
            onPress={() => handleViewTheHeroApparitions(ButtonTypeValue.SERIES)}
          >
            <BadgeDescription>Séries</BadgeDescription>
            <BadgeViewValue type="series">
              <BadgeValue>{series}</BadgeValue>
            </BadgeViewValue>
          </Badge>
        )}

        {events !== 0 && (
          <Badge
            type="events"
            onPress={() => handleViewTheHeroApparitions(ButtonTypeValue.EVENTS)}
          >
            <BadgeDescription>Eventos</BadgeDescription>
            <BadgeViewValue type="events">
              <BadgeValue>{events}</BadgeValue>
            </BadgeViewValue>
          </Badge>
        )}

        {comics !== 0 && (
          <Badge
            type="comics"
            onPress={() => handleViewTheHeroApparitions(ButtonTypeValue.COMICS)}
          >
            <BadgeDescription>HQs</BadgeDescription>
            <BadgeViewValue type="comics">
              <BadgeValue>{comics}</BadgeValue>
            </BadgeViewValue>
          </Badge>
        )}
      </BadgeContent>
    </>
  );
};

export { HeroApperances };
